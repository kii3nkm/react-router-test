import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page01">Page01</Link>
        {/* <br />
        <Link to="/page02">Page02</Link> */}
      </div>
      <Router />
    </BrowserRouter>
  );
}
