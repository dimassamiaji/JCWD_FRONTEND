import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomePage from "../pages/auth/home";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import DetailPage from "../pages/auth/detail";

function ProtectedPage({ children, userOnly, guestOnly }) {
  const userSelector = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigate();
  useEffect(() => {
    console.log(userSelector, "ini user");
    console.log(guestOnly, userSelector.id);
    if (guestOnly && userSelector.id) {
      nav("/");
    } else if (userOnly && !userSelector.id) {
      nav("login");
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [userSelector.id, children]);
  return <> {isLoading ? <div>Loading ...</div> : children}</>;
}
export default ProtectedPage;

class RouteClass {
  constructor(path, element, userOnly, guestOnly) {
    this.path = path;
    this.element = (
      <ProtectedPage userOnly={userOnly} guestOnly={guestOnly}>
        {element}
      </ProtectedPage>
    );
  }
}

export const routes = [
  new RouteClass("/", <HomePage />),
  new RouteClass("/product/:id", <DetailPage />, true),

  new RouteClass("/login", <LoginPage />, false, true),
  new RouteClass("/register", <RegisterPage />, false, true),
];
