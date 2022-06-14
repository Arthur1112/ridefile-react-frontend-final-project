import "./App.css";
import "./styling/styling.css";
import HeroPage from "./components/HeroPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import MenuBar from "./components/MenuBar";
import CreateNewProfile from "./components/NewProfilePage";
import RideInfoNewProfile from "./components/RideInfoNewProfile";
import { AnonRoute } from "./components/routes/AnonRoute";
import { AuthRoute } from "./components/routes/AuthRoute";
import { LoggedInRoute } from "./components/LoggedInRoute";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <userContextProvider>
        <MenuBar />
        <section id="appMainSection">
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route
              path="/login"
              // element={<Login setToken={setToken} />}
              element={
                <AnonRoute>
                  <Login />
                </AnonRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <profile />
                </AuthRoute>
              }
            />
            {/* <Route path="/profile" element={<ProfilePage />} /> */}
            <Route path="/newProfile" element={<CreateNewProfile />} />
            <Route
              path="/newProfileRideInfo"
              element={<RideInfoNewProfile />}
            />
          </Routes>
        </section>
      </userContextProvider>
    </BrowserRouter>
  );
}

export default App;
