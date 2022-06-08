import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateNewProfile() {
  let navigate = useNavigate();

  const [newProfile, setNewProfile] = useState({
    //some unique id
    username: "",
    rideOwner: "",
    rideMake: "",
    rideModel: "",
    rideTrim: "",
    rideYear: "",
    transmission: "",
    rideColor: "",
    rideTireSize: "",
    rideRimSize: "",
    RimsInfo: "",
    frontBrakePads: "",
    rearBrakePads: "",
    engineOilType: "",
    engineOilCapacity: "",
    exhaustSystem: "",
    batterySize: "",
    rideSeats: "",
    soundSystem: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5050/newProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProfile),
    })
      .then(() => navigate("/"))
      .catch(setError);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNewProfile({
      ...newProfile,
      [e.target.username]: newValue,
    });
  };

  return (
    <section>
      <h2>Create a new profile!</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <label for="username">
          Username:
          <input
            name="username"
            type="text"
            value={newProfile.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="rideOwner">
          Name:
          <input
            name="rideOwner"
            type="text"
            value={newProfile.rideOwner}
            onChange={handleChange}
          />
        </label>
        <br />
        <h4>
          Tell us more about your ride, please fill in some information for your
          vehicle
        </h4>
        <label for="rideMake">
          Make:
          <input
            name="rideMake"
            type="text"
            value={newProfile.rideMake}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="rideModel">
          Model:
          <input
            name="rideModel"
            type="text"
            value={newProfile.rideModel}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="rideTrim">
          Trim level:
          <input
            name="rideTrim"
            type="text"
            value={newProfile.rideTrim}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="rideYear">
          Year:
          <input
            name="rideYear"
            type="text"
            value={newProfile.rideYear}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="transmission">
          Transmission:
          <input
            name="transmission"
            type="text"
            value={newProfile.transmission}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="rideColor">
          Color:
          <input
            name="rideColor"
            type="text"
            value={newProfile.rideColor}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="rideTireSize">
          Tire Size:
          <input
            name="rideTireSize"
            type="text"
            value={newProfile.rideTireSize}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="rideRimSize">
          Rim Size:
          <input
            name="rideRimSize"
            type="text"
            value={newProfile.rideRimSize}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="RimsInfo">
          Rims Info:
          <input
            name="RimsInfo"
            type="text"
            value={newProfile.RimsInfo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="frontBrakePads">
          Front Brake Pads:
          <input
            name="frontBrakePads"
            type="text"
            value={newProfile.frontBrakePads}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="rearBrakePads">
          Rear Brake Pads:
          <input
            name="rearBrakePads"
            type="text"
            value={newProfile.rearBrakePads}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="engineOilType">
          Type of engine oil:
          <input
            name="engineOilType"
            type="text"
            value={newProfile.engineOilType}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="engineOilCapacity">
          Engine oil capacity:
          <input
            name="engineOilCapacity"
            type="text"
            value={newProfile.engineOilCapacity}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="exhaustSystem">
          Exhaust system:
          <input
            name="exhaustSystem"
            type="text"
            value={newProfile.exhaustSystem}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="batterySize">
          Battery size:
          <input
            name="batterySize"
            type="text"
            value={newProfile.batterySize}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="rideSeats">
          Seats info:
          <input
            name="rideSeats"
            type="text"
            value={newProfile.rideSeats}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="soundSystem">
          Sound system:
          <input
            name="soundSystem"
            type="text"
            value={newProfile.soundSystem}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
