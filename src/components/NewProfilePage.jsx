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

  return <section></section>;
}
