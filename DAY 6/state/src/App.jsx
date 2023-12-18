import "./App.css";
import { Routes } from "./routes/routes";

function App() {
  return (
    <Routes>
      {routes.map((route, key) => (
        <Routes {...route} key={key} />
      ))}
    </Routes>
  );
}

export default App;
