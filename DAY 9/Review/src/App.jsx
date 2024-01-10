import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/auth/home";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import axios from "axios";
import { functionLogin } from "./redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { axiosInstance } from "./api/axios";
import { routes } from "./routes/protectedPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const keepLogin = () => {
    console.log("test");
    const id = localStorage.getItem("user");
    // console.log(id);
    // if (id != null)
    axiosInstance()
      .get(`/users/${id}`)
      .then((res) => {
        delete res.data.password;
        // console.log(res.data);
        dispatch(functionLogin(res.data));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <Routes>
          {routes.map((route, key) => {
            return <Route {...route} key={key} />;
          })}
        </Routes>
      )}
    </>
  );
}

export default App;
