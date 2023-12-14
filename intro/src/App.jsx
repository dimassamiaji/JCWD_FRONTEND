import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassComponent from "./components/classComponents";
import FunctionComponents from "./components/functionComponents";
import ComponentLain from "./components/componentLain";
import HomePage from "./pages/homepage";
import ProfilePage from "./pages/profilePage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <FunctionComponents />
      <ClassComponent />
      <ComponentLain /> */}
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
