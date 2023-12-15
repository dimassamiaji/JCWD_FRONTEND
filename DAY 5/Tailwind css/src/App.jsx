import "./App.css";
import {
  P10Components,
  P1Components,
  P2Components,
  P3Components,
  P4Components,
  P5Components,
  P6Components,
  P7Components,
  P8Components,
  P9Components,
} from "./components/exercise";
import NavbarComponents from "./components/navbar";

function App() {
  return (
    <>
      <NavbarComponents />
      <h1 className=" text-3xl font-[900] underline">Hello World</h1>
      <P1Components />
      <P2Components />
      <P3Components />
      <P4Components />
      <P5Components />
      <P6Components />
      <P7Components />
      <P8Components />
      <P9Components />
      <P10Components />
    </>
  );
}

export default App;
