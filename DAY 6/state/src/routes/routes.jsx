import CalculatorPage from "../pages/calculator";
import HomePage from "../pages/home";

export const routes = [
  { element: <HomePage />, path: "/" },
  { element: <CalculatorPage />, path: "/calculator" },
];

class RouteClass {
  constructor(element, path) {
    this.element = element;
    this.path = path;
  }
}

export const routes2 = [
  new RouteClass(<HomePage />, "/"),
  new RouteClass(<CalculatorPage />, "/calculator"),
];
