import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/newProfilePage.css";

// import { salt } from "../mySalt";
// import bcrypt from "bcryptjs";

export default function CreateNewProfile() {
  let navigate = useNavigate();
  // const hash = bcrypt.hashSync(password, salt);
  const [newProfile, setNewProfile] = useState({
    username: "",
    email: "",
    password: "", //hash
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
    fetch("https://ridefile-final-project-as.web.app/addNewProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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
      [e.target.name]: newValue,
    });
  };

  return (
    <>
      <section id="newUserMainInfoContainer">
        <div id="newUserForm">
          <h3>Welcome to RideFile! </h3>
          <p>
            Please fill out the following basic information to start creating
            your new profile!
          </p>
          {error && <h3 style={{ color: "red" }}>{error}</h3>}
          <Form onFinish={handleSubmit}>
            <Form.Item for="username">
              Username:
              <Input
                name="username"
                type="text"
                value={newProfile.username}
                onChange={handleChange}
              />
            </Form.Item>
            <br />
            <Form.Item for="password">
              Password:
              <Input
                name="password"
                type="text"
                value={newProfile.password}
                onChange={handleChange}
              />
            </Form.Item>
            <br />
            <Form.Item for="email">
              Email:
              <Input
                name="email"
                type="text"
                value={newProfile.email}
                onChange={handleChange}
              />
            </Form.Item>
            <br />
            <Form.Item for="rideOwner">
              Full Name:
              <Input
                name="rideOwner"
                type="text"
                value={newProfile.rideOwner}
                onChange={handleChange}
              />
              <br />
              <br />
              <br />
              <Button
                id="loginButton"
                onClick={() => navigate("/newProfileRideInfo")}
              >
                Continue
              </Button>
            </Form.Item>
            <br />
          </Form>
        </div>
      </section>
    </>
  );
}
