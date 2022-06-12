import { useEffect, useState } from "react";
import "../styling/profilePage.css";
import Login from "./Login";
import LogoutButton from "./LogoutButton";
import { ReactComponent as YourSvg } from "../svg/carDashboardIconsSvg/trunk.svg";

export default function ProfilePage({ token }) {
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetch("http://localhost:7050/profile")
      // fetch("https://ridefile-final-project-as.web.app/profile")
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch(console.error);
  }, []);
  // console.log(profile);
  return (
    <section id="mainFlexContainer">
      {!token ? (
        <h2 id="notLogedIn">Go to /login</h2>
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
                | {profile[0].rideTrim}
              </dt>
              <dt></dt>
            </dl>
          </div>
          <dl id="extraProfileInfo">
            <h2>Custom / Stock Vehicle Specs</h2>
            <dt className="tabIconContainer">
              <YourSvg />
              <p className="tabIconDescription">Transmission:</p>
            </dt>
            <dd>{profile[0].transmission}</dd>
            <dt>Exhaust System</dt>
            <dd>{profile[0].exhaustSystem}</dd>
            <dt>Tire Size</dt>
            <dd>{profile[0].rideTireSize}</dd>
            <dt>Rim Size</dt>
            <dd>{profile[0].rideRimSize}</dd>
            <dt>Rims Info</dt>
            <dd>{profile[0].rideRimsInfo}</dd>
            <dt>Sound System</dt>
            <dd>{profile[0].soundSystem}</dd>
            <dt>Seats</dt>
            <dd>{profile[0].rideSeats}</dd>
            <dt>Front Brake Pad</dt>
            <dd>{profile[0].frontBrakePads}</dd>
            <dt>Rear Brake Pad</dt>
            <dd>{profile[0].rearBrakePads}</dd>
            <dt>Engine Oil</dt>
            <dd>{profile[0].engineOilType}</dd>
            <dt>Engine Capacity</dt>
            <dd>{profile[0].engineOilCapacity}</dd>
            <dt>Battery Size</dt>
            <dd>{profile[0].batterySize}</dd>
          </dl>
        </section>
      )}
      <LogoutButton />
    </section>
  );
}
