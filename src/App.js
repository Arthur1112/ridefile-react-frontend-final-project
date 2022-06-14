import "./App.css";
import "./styling/styling.css";
import HeroPage from "./components/HeroPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import MenuBar from "./components/MenuBar";
import { createContext, useEffect, useState } from "react";
import Login from "./components/Login";
import CreateNewProfile from "./components/NewProfilePage";
import RideInfoNewProfile from "./components/RideInfoNewProfile";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState("");
  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token);
    }
  }, []);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <MenuBar />
        <section id="appMainSection">
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route
              path="/login"
              // element={<Login setToken={setToken} />}
              element={
                <div>
                  {!token ? (
                    <Login setToken={setToken} />
                  ) : (
                    <ProfilePage token={token} />
                  )}
                </div>
              }
            />
            <Route path="/profile" element={<ProfilePage token={token} />} />
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
