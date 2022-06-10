import { useEffect, useState } from "react";
import "../styling/profilePage.css";
import Login from "./Login";
import LogoutButton from "./LogoutButton";

export default function ProfilePage({ token }) {
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetch("http://localhost:7050/profile")
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch(console.error);
  }, []);
  // console.log(profile);
  return (
    <section id="mainFlexContainer">
      {!token ? (
        <>Go to /login</>
      ) : !profile ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <img
            id="rideImage"
            src="https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/CAC20FOC051B0101.jpg"
          />
          <div>
            <img
              id="profileImage"
              src="https://www.ndstudies.gov/gr4/sites/default/files/unit1/img/45-TR_portrait.jpg"
            />
            <dl id="mainProfileInfo">
              <dt id="rideMainInfo">
                {profile[0].rideYear} {profile[0].rideMake}{" "}
                {profile[0].rideModel} {profile[0].rideTrim}
              </dt>
              <dt>Color : {profile[0].rideColor}</dt>
              <dt>Owner : {profile[0].rideOwner}</dt>
            </dl>
          </div>
          <br />
          <h2>Custom / Stock Vehicle Specs</h2>
          <dl id="extraProfileInfo">
            <dt>Transmission:</dt>
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
        </>
      )}
      <LogoutButton />
    </section>
  );
}
