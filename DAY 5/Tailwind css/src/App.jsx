import "./App.css";
import ColorArrayComponent, {
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

export default function App() {
  const arr = [
    "red",
    "slate",
    "yellow",
    "orange",
    "blue",
    "blue",
    "red",
    "yellow",
    "gray",
    "cyan",
  ];
  const arr2 = [
    "red-600",
    "slate-500",
    " yellow-500",
    "orange-400",
    "blue-200",
    "blue-500",
    "red-300",
    "yellow-700",
    "ray-400",
    "cyan-200",
  ];

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
      <h1>LOOP component</h1>
      {arr.map((color, idx) => (
        <ColorArrayComponent bgColor={color} key={idx} />
      ))}

      <h1>ini tailwind</h1>
      {arr2.map((color, idx) => (
        <ColorArrayComponent bgColor={color} key={idx} />
      ))}
    </>
  );
}
