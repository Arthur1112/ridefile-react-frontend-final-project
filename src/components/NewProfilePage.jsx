import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateNewProfile() {
  let navigate = useNavigate();

  const [newProfile, setNewProfile] = useState({
    //some unique id
    username: "",
    email: "",
    password: "",
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
    fetch("http://localhost:5050/addNewProfile", {
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
      [e.target.name]: newValue,
    });
  };

  return (
    <section>
      <h2>Create a new profile!</h2>
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
          Name:
          <Input
            name="rideOwner"
            type="text"
            value={newProfile.rideOwner}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <h4>
          Tell us more about your ride, please fill in some information for your
          vehicle
        </h4>
        <Form.Item for="rideMake">
          Make:
          <Input
            name="rideMake"
            type="text"
            value={newProfile.rideMake}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="rideModel">
          Model:
          <Input
            name="rideModel"
            type="text"
            value={newProfile.rideModel}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="rideTrim">
          Trim level:
          <Input
            name="rideTrim"
            type="text"
            value={newProfile.rideTrim}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="rideYear">
          Year:
          <Input
            name="rideYear"
            type="text"
            value={newProfile.rideYear}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="transmission">
          Transmission:
          <Input
            name="transmission"
            type="text"
            value={newProfile.transmission}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="rideColor">
          Color:
          <Input
            name="rideColor"
            type="text"
            value={newProfile.rideColor}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="rideTireSize">
          Tire Size:
          <Input
            name="rideTireSize"
            type="text"
            value={newProfile.rideTireSize}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="rideRimSize">
          Rim Size:
          <Input
            name="rideRimSize"
            type="text"
            value={newProfile.rideRimSize}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="RimsInfo">
          Rims Info:
          <Input
            name="RimsInfo"
            type="text"
            value={newProfile.RimsInfo}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="frontBrakePads">
          Front Brake Pads:
          <Input
            name="frontBrakePads"
            type="text"
            value={newProfile.frontBrakePads}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="rearBrakePads">
          Rear Brake Pads:
          <Input
            name="rearBrakePads"
            type="text"
            value={newProfile.rearBrakePads}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="engineOilType">
          Type of engine oil:
          <Input
            name="engineOilType"
            type="text"
            value={newProfile.engineOilType}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="engineOilCapacity">
          Engine oil capacity:
          <Input
            name="engineOilCapacity"
            type="text"
            value={newProfile.engineOilCapacity}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="exhaustSystem">
          Exhaust system:
          <Input
            name="exhaustSystem"
            type="text"
            value={newProfile.exhaustSystem}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="batterySize">
          Battery size:
          <Input
            name="batterySize"
            type="text"
            value={newProfile.batterySize}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="rideSeats">
          Seats info:
          <Input
            name="rideSeats"
            type="text"
            value={newProfile.rideSeats}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Form.Item for="soundSystem">
          Sound system:
          <Input
            name="soundSystem"
            type="text"
            value={newProfile.soundSystem}
            onChange={handleChange}
          />
        </Form.Item>
        <br />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}
