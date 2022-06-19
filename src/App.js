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
import { Switch } from "antd";

export const UserContext = createContext();

function App() {
  const defaultDark = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState("theme", defaultDark ? "light" : "80s");

  const switchTheme = () => {
    const newTheme = theme === "80s" ? "light" : "80s";
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
          <section id="appMainSection2">
            <div id="themeSwitchContainer">
              <input type="checkbox" id="ThemeSwitch" onChange={switchTheme} />{" "}
              <label id="themeLabel" for="ThemeSwitch"></label>
            </div>
            <MenuBar />
            <Routes>
              <Route path="/" element={<HeroPage />} />
              <Route
                path="/login"
                element={
                  <>
                    <Login /> <Footer />
                  </>
                }
                // element={!token ? <Login /> : <ProfilePage />}
              />
              <Route
                path="/profile"
                element={
                  <>
                    <ProfilePage /> <Footer />
                  </>
                }
              />
              <Route
                path="/newProfile"
                element={
                  <>
                    <CreateNewProfile /> <Footer />
                  </>
                }
              />
              <Route
                path="/newProfileRideInfo"
                element={
                  <>
                    <RideInfoNewProfile /> <Footer />
                  </>
                }
              />
              <Route
                path="/updateProfile"
                element={
                  <>
                    <UpdateProfileSection /> <Footer />{" "}
                  </>
                }
              />
            </Routes>
            {/* <Footer /> */}
          </section>
        </section>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
