import "./App.css";
import "./styling/styling.css";
import HeroPage from "./components/HeroPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileButton from "./components/ProfileButton";
import ProfilePage from "./components/ProfilePage";
import MenuBar from "./components/MenuBar";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import CreateNewProfile from "./components/NewProfilePage";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token);
    }
  }, []);
  console.log(token);
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
          <Route path="/login" element={<Login />} />
          <Route path="/newProfile" element={<CreateNewProfile />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
