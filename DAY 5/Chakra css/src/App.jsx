import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card, Center } from "@chakra-ui/react";
import { Cardlist } from "./components/card";

function App() {
  return (
    <>
      <Center flexDir={"column"}>
        <button>ok</button>
      </Center>
      <Cardlist />
    </>
  );
}

export default App;
