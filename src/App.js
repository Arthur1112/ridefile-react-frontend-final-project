import "./App.css";
import "./styling/styling.css";
import HeroPage from "./components/HeroPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import MenuBar from "./components/MenuBar";
import CreateNewProfile from "./components/NewProfilePage";
import RideInfoNewProfile from "./components/RideInfoNewProfile";
import { LoggedInRoute } from "./components/LoggedInRoute";

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
              element={<LoggedInRoute />}
            />
            <Route path="/profile" element={<ProfilePage />} />
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
