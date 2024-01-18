import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./component/Home";
import AboutPage from "./component/About";
import ServicesPage from "./component/Services";
import TeamsPage from "./component/Teams";
import { Routes, Route } from "react-router-dom";
import NavbarProfile from "./component/navbar";

function App() {
  return (
    <>
      <NavbarProfile />
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="Teams" element={<TeamsPage />} />
      </Routes>
    </>
  );
}

export default App;
