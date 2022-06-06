import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import "../styling/profilePage.css";

export default function ProfilePage() {
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetch("http://localhost:5050/profile")
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch(console.error);
  }, []);
  console.log(profile);
  return (
    <section>
      <Paper elevation={3}>
        {!profile ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <img
              id="rideImage"
              src="https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/CAC20FOC051B0101.jpg"
            />
            <h1>Profile:</h1>
            <div id="mainFlexContainer">
              <img
                id="profileImage"
                src="https://www.ndstudies.gov/gr4/sites/default/files/unit1/img/45-TR_portrait.jpg"
              />
              <dl>
                <dt>Owner : {profile[0].rideOwner}</dt>
                <dt>Make : {profile[0].rideMake}</dt>
                <dt>Model : {profile[0].rideMake}</dt>
                <dt>Trim : {profile[0].rideTrim}</dt>
                <dt>Year : {profile[0].rideYear}</dt>
                <dt>Color : {profile[0].rideColor}</dt>
              </dl>
            </div>
            <br />
            <dl>
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
      </Paper>
    </section>
  );
}
