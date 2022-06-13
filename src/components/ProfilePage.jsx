import { useEffect, useState } from "react";
import "../styling/profilePage.css";
import Login from "./Login";
import LogoutButton from "./LogoutButton";
import { ReactComponent as YourSvg } from "../svg/carDashboardIconsSvg/trunk.svg";
import { ReactComponent as YourSvg2 } from "../svg/carDashboardIconsSvg/rear-window-defrost.svg";
import { ReactComponent as YourSvg3 } from "../svg/carDashboardIconsSvg/air-conditioning.svg";
import { ReactComponent as YourSvg4 } from "../svg/carDashboardIconsSvg/fuel.svg";
import { ReactComponent as YourSvg5 } from "../svg/carDashboardIconsSvg/hazard.svg";
import { ReactComponent as YourSvg6 } from "../svg/carDashboardIconsSvg/light.svg";
import { ReactComponent as YourSvg7 } from "../svg/carDashboardIconsSvg/seatbelt.svg";
import { ReactComponent as YourSvg8 } from "../svg/carDashboardIconsSvg/airbag.svg";
import { ReactComponent as YourSvg9 } from "../svg/carDashboardIconsSvg/ventilating-fan.svg";
import { ReactComponent as YourSvg10 } from "../svg/carDashboardIconsSvg/oil.svg";
import { ReactComponent as YourSvg11 } from "../svg/carDashboardIconsSvg/fuel-filling.svg";
import { ReactComponent as YourSvg12 } from "../svg/carDashboardIconsSvg/battery.svg";

export default function ProfilePage({ token }) {
  const [profile, setProfile] = useState();
  useEffect(() => {
    // fetch("http://localhost:7050/profile")
    fetch("https://ridefile-final-project-as.web.app/profile")
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch(console.error);
  }, []);
  // console.log(profile);
  return (
    <section id="mainFlexContainer">
      {!token ? (
        <div id="notLoggedInContainer">
          <h3 id="notLogedIn">
            Error: ??? <br />
          </h3>
          <p id="notLogedIn">Please Login First</p>
        </div>
      ) : !profile ? (
        <h2>Loading...</h2>
      ) : (
        <section id="profileMainContainer">
          <img id="rideImage" src={profile[0].rideImage} />
          <div>
            <dl id="mainProfileInfo">
              <img id="profileImage" src={profile[0].profileImage} />
              <dt id="rideMainInfo">
                {profile[0].rideYear} {profile[0].rideMake} {""}
                {profile[0].rideModel}
              </dt>
              <dt id="rideSubInfo">
                Color : {profile[0].rideColor} | Owner : {profile[0].rideOwner}{" "}
                | Vehicle Trim : {profile[0].rideTrim}
              </dt>
              <dt></dt>
            </dl>
          </div>
          <dl id="extraProfileInfo">
            <h2>Custom / Stock Vehicle Specs</h2>
            <dt className="tabIconContainer">
              <YourSvg className="dashboardSvg" />
              <p className="tabIconDescription">Transmission:</p>
              <p className="tabIconDescription">{profile[0].transmission}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg2 className="dashboardSvg" />
              <p className="tabIconDescription">Exhaust System:</p>
              <p className="tabIconDescription">{profile[0].exhaustSystem}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg3 className="dashboardSvg" />
              <p className="tabIconDescription">Tire Size:</p>
              <p className="tabIconDescription">{profile[0].rideTireSize}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg4 className="dashboardSvg" />
              <p className="tabIconDescription">Rim Size:</p>
              <p className="tabIconDescription">{profile[0].rideRimSize}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg5 className="dashboardSvg" />
              <p className="tabIconDescription">Rims Info:</p>
              <p className="tabIconDescription">{profile[0].RimsInfo}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg6 className="dashboardSvg" />
              <p className="tabIconDescription">Sound System:</p>
              <p className="tabIconDescription">{profile[0].soundSystem}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg7 className="dashboardSvg" />
              <p className="tabIconDescription">Seats:</p>
              <p className="tabIconDescription">{profile[0].rideSeats}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg8 className="dashboardSvg" />
              <p className="tabIconDescription">Front Brake Pad:</p>
              <p className="tabIconDescription">{profile[0].frontBrakePads}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg9 className="dashboardSvg" />
              <p className="tabIconDescription">Rear Brake Pad:</p>
              <p className="tabIconDescription">{profile[0].rearBrakePads}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg10 className="dashboardSvg" />
              <p className="tabIconDescription">Engine Oil:</p>
              <p className="tabIconDescription">{profile[0].engineOilType}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg11 className="dashboardSvg" />
              <p className="tabIconDescription">Engine Capacity:</p>
              <p className="tabIconDescription">
                {profile[0].engineOilCapacity}
              </p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg12 className="dashboardSvg" />
              <p className="tabIconDescription">Battery Size:</p>
              <p className="tabIconDescription">{profile[0].batterySize}</p>
            </dt>
            <br />
            <LogoutButton />
          </dl>
        </section>
      )}
    </section>
  );
}
