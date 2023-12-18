import "./App.css";
import NavbarComponents from "./components/navbar";
import { routes, routes2 } from "./routes/routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarComponents />
      <Routes>
        {routes.map((route, key) => (
          <Route {...route} key={key} />
        ))}
      </Routes>
    </>
  );
}

export default App;
