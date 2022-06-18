import "./App.css";
import "./styling/styling.css";
import HeroPage from "./components/HeroPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import MenuBar from "./components/MenuBar";
import CreateNewProfile from "./components/NewProfilePage";
import RideInfoNewProfile from "./components/RideInfoNewProfile";
import Login from "./components/Login";
import { createContext, useEffect, useState } from "react";
import Footer from "./components/Footer";
import useLocalStorage from "use-local-storage";

import UpdateProfileSection from "./components/UpdateProfileSection.jsx";

export const UserContext = createContext();

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: 80s)").matches;
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState("theme", defaultDark ? "80s" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "80s" : "light";
    setTheme(newTheme);
  };
  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token);
    }
  }, [setToken]);

  const value = {
    user,
    setUser,
    token,
    setToken,
  };

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          user,
          setUser,
          token,
          setToken,
          checked,
          setChecked,
          theme,
          setTheme,
        }}
      >
        <section data-theme={theme} id="appMainSection">
          <button onClick={switchTheme}>
            Switch the Theme to {theme === "light" ? "80s" : "light"}
          </button>
          <MenuBar />
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route
              path="/login"
              element={<Login />}
              // element={!token ? <Login /> : <ProfilePage />}
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/newProfile" element={<CreateNewProfile />} />
            <Route
              path="/newProfileRideInfo"
              element={<RideInfoNewProfile />}
            />
            <Route path="/updateProfile" element={<UpdateProfileSection />} />
          </Routes>
          <Footer />
        </section>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
