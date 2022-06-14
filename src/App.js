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

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
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
      <UserContext.Provider value={{ user, setUser, token, setToken }}>
        <MenuBar />
        <section id="appMainSection">
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route
              path="/login"
              // element={<Login />}
              element={!token ? <Login /> : <ProfilePage />}
            />
            {/* <Route path="/profile" element={<ProfilePage />} /> */}
            <Route path="/newProfile" element={<CreateNewProfile />} />
            <Route
              path="/newProfileRideInfo"
              element={<RideInfoNewProfile />}
            />
          </Routes>
        </section>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
