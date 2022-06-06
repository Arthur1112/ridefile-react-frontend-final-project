import "./App.css";
import "./styling/styling.css";
import TitleCards from "./components/TitleCards";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>Menu Bar</h1>
      <TitleCards />
      <section>
        <Routes>
          <Route />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
