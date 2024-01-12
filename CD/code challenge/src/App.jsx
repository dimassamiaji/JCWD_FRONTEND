import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarComponents from "./component/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarComponents />
    </>
  );
}

export default App;
