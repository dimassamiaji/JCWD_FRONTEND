import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarComponent from "./component/navbar";
import HomePage from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarComponent />
    </>
  );
}

export default App;
