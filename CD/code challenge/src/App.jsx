import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarProfile from "./component/Navbar";
import HomePage from "./component/Home";
import AboutPage from "./component/About";
import ServicesPage from "./component/Services";
import TeamsPage from "./component/Teams";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarProfile />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="Teams" element={<TeamsPage />} />
      </Routes>
    </>
  );
}

export default App;
