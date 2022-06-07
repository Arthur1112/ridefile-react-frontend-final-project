import "./App.css";
import "./styling/styling.css";
import HeroPage from "./components/HeroPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileButton from "./components/ProfileButton";
import ProfilePage from "./components/ProfilePage";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <section>
        <Routes>
          <Route
            style={{
              background: "url('https://w.wallha.com/ws/11/56tXTAlV.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            path="/"
            element={
              <>
                <HeroPage />
                <ProfileButton />
              </>
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
