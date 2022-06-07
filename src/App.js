import "./App.css";
import "./styling/styling.css";
import TitleCards from "./components/TitleCards";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileButton from "./components/ProfileButton";
import ProfilePage from "./components/ProfilePage";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <TitleCards />
      <section>
        <Routes>
          <Route path="/" element={<ProfileButton />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
