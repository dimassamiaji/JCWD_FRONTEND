import "./App.css";
import { Routes } from "./routes/routes";

function App() {
  return (
    <Routes>
      {Routes.map((route, key) => (
        <Route {...route} key={key} />
      ))}
    </Routes>
  );
}

export default App;
