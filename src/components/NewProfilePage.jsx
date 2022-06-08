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
  const[error, setError] = useState('')

  return (
  <section>
    <h2>Create a new profile!</h2>
    {error && <h3 style={{color: 'red'}}>{error}</h3>}
    <form onSubmit={}>
      <label for='username'>
        Username: 
        <input name="username" type='text' value={newProfile.username} onChange={}  />
      </label>
      <br />
      <label for='rideOwner'>
        Name: 
        <input name="rideOwner" type='text' value={newProfile.rideOwner} onChange={}  />
      </label>
      <br />
      <label for='rideMake'>
        Make of your ride: 
        <input name="rideMake" type='text' value={newProfile.rideMake} onChange={}  />
      </label>
      <br />

    </form>
  </section>
  )
}
