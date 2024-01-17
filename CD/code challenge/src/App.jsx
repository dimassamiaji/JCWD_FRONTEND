import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarComponents from "./component/navbar";
import NavbarProfile from "./component/navbar";
import HomePage from "./pages/home";
import AboutUsPage from "./pages/About us";

function App() {
  return (
    <>
      {/* <NavbarProfile /> */}
      <HomePage />
      <AboutUsPage />
    </>
  );
}

export default App;