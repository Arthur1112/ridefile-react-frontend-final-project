import { Button, Form, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/newProfilePage.css";

// import { salt } from "../mySalt";
// import bcrypt from "bcryptjs";
// const hash = bcrypt.hashSync(password, salt);

export default function CreateNewProfile() {
  let navigate = useNavigate();
  const [newProfile, setNewProfile] = useState({
    username: "",
    email: "",
    Userpassword: "", //hash
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
    // fetch("https://ridefile-final-project-as.web.app/addNewProfile", {
    fetch("http://localhost:7050/addNewProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newProfile),
    })
      .then(() => navigate("/login"))
      .catch(setError);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNewProfile({
      ...newProfile,
      [e.target.name]: newValue,
    });
  };
  const props = {
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
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
            <Form.Item for="Userpassword">
              Password:
              <Input
                name="Userpassword"
                type="text"
                value={newProfile.Userpassword}
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
            </Form.Item>
            <br />
            <h4>
              Tell us a little bit about your ride!
              <br />
              Please fill in some information below, if you do not have anything
              aftermarket for a specific section below, you can just put
              "stock".
            </h4>
            <div className="rideFormDiv">
              <Form.Item for="rideMake">
                Make:
                <Input
                  name="rideMake"
                  type="text"
                  value={newProfile.rideMake}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item for="rideModel">
                Model:
                <Input
                  name="rideModel"
                  type="text"
                  value={newProfile.rideModel}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>
            <br />
            <div className="rideFormDiv">
              <Form.Item for="rideTrim">
                Trim level:
                <Input
                  name="rideTrim"
                  type="text"
                  value={newProfile.rideTrim}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item for="rideYear">
                Year:
                <Input
                  name="rideYear"
                  type="text"
                  value={newProfile.rideYear}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>
            <br />
            <div className="rideFormDiv">
              <Form.Item for="transmission">
                Transmission:
                <Input
                  name="transmission"
                  type="text"
                  value={newProfile.transmission}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item for="rideColor">
                Color:
                <Input
                  name="rideColor"
                  type="text"
                  value={newProfile.rideColor}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>
            <br />
            <div className="rideFormDiv">
              <Form.Item for="rideTireSize">
                Tire Size:
                <Input
                  name="rideTireSize"
                  type="text"
                  value={newProfile.rideTireSize}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item for="rideRimSize">
                Rim Size:
                <Input
                  name="rideRimSize"
                  type="text"
                  value={newProfile.rideRimSize}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>
            <br />
            <div className="rideFormDiv">
              <Form.Item for="RimsInfo">
                Rims Info:
                <Input
                  name="RimsInfo"
                  type="text"
                  value={newProfile.RimsInfo}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item for="frontBrakePads">
                Front Brake Pads:
                <Input
                  name="frontBrakePads"
                  type="text"
                  value={newProfile.frontBrakePads}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>
            <br />
            <div className="rideFormDiv">
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
            </div>
            <br />
            <div className="rideFormDiv">
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
            </div>
            <br />
            <div className="rideFormDiv">
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
            </div>
            <br />
            <div className="rideFormDiv">
              <Form.Item for="soundSystem">
                Sound system:
                <Input
                  name="soundSystem"
                  type="text"
                  value={newProfile.soundSystem}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>
            <div className="rideFormDiv">
              <Form.Item for="profileImage">
                Profile Image URL:
                <Input
                  name="profileImage"
                  type="text"
                  value={newProfile.profileImage}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>
            <div className="rideFormDiv">
              <Form.Item for="rideImage">
                Ride Image Url:
                <Input
                  name="rideImage"
                  type="text"
                  value={newProfile.rideImage}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>

            {/* <div className="rideFormDiv">
              <Form.Item for="profileImage">
                Profile Image URL:
                <Upload
                  classiName="imgUpload"
                  {...props}
                  name="profileImage"
                  type="text"
                  value={newProfile.profileImage}
                  onChange={handleChange}
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
              <br />
              <br />
              <Form.Item for="rideImage">
                Ride Image Url:
                <Upload
                  className="imgUpload"
                  {...props}
                  name="rideImage"
                  type="text"
                  value={newProfile.rideImage}
                  onChange={handleChange}
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
              <br />
            </div> */}
            <br />
            <Button onClick={handleSubmit} id="loginButton" htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
}
