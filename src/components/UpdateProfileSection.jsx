import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { UserContext } from "../App";

export default function UpdateProfileSection() {
  let navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  // const [newProfile, setNewProfile] = useState({
  //   rideOwner: "",
  //   rideMake: "",
  //   rideModel: "",
  //   rideTrim: "",
  //   rideYear: "",
  //   transmission: "",
  //   rideColor: "",
  //   rideTireSize: "",
  //   rideRimSize: "",
  //   RimsInfo: "",
  //   frontBrakePads: "",
  //   rearBrakePads: "",
  //   engineOilType: "",
  //   engineOilCapacity: "",
  //   exhaustSystem: "",
  //   batterySize: "",
  //   rideSeats: "",
  //   soundSystem: "",
  // });
  const [error, setError] = useState("");

  const handleUpdate = (e) => {
    fetch(`http://localhost:7050/updateProfile/${user.id}`, {
      // fetch(
      //   `https://ridefile-final-project-as.web.app/updateProfile/${user.id}`,
      //   {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
    // .then(() => navigate("/login"))
    // .catch(setError);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setUser({
      ...user,
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
          <h3>Please update your rides information below! </h3>
          <Form onFinish={handleUpdate}>
            <div className="rideFormDiv">
              <Form.Item for="rideMake">
                Make:
                <Input
                  name="rideMake"
                  type="text"
                  value={user.rideMake}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item for="rideModel">
                Model:
                <Input
                  name="rideModel"
                  type="text"
                  value={user.rideModel}
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
                  value={user.rideTrim}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item for="rideYear">
                Year:
                <Input
                  name="rideYear"
                  type="text"
                  value={user.rideYear}
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
                  value={user.transmission}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item for="rideColor">
                Color:
                <Input
                  name="rideColor"
                  type="text"
                  value={user.rideColor}
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
                  value={user.rideTireSize}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item for="rideRimSize">
                Rim Size:
                <Input
                  name="rideRimSize"
                  type="text"
                  value={user.rideRimSize}
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
                  value={user.RimsInfo}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item for="frontBrakePads">
                Front Brake Pads:
                <Input
                  name="frontBrakePads"
                  type="text"
                  value={user.frontBrakePads}
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
                  value={user.rearBrakePads}
                  onChange={handleChange}
                />
              </Form.Item>
              <br />
              <Form.Item for="engineOilType">
                Type of engine oil:
                <Input
                  name="engineOilType"
                  type="text"
                  value={user.engineOilType}
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
                  value={user.engineOilCapacity}
                  onChange={handleChange}
                />
              </Form.Item>
              <br />
              <Form.Item for="exhaustSystem">
                Exhaust system:
                <Input
                  name="exhaustSystem"
                  type="text"
                  value={user.exhaustSystem}
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
                  value={user.batterySize}
                  onChange={handleChange}
                />
              </Form.Item>
              <br />
              <Form.Item for="rideSeats">
                Seats info:
                <Input
                  name="rideSeats"
                  type="text"
                  value={user.rideSeats}
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
                  value={user.soundSystem}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>

            {/* <div className="rideFormImgDiv">
              <Form.Item for="profileImage">
                Profile Image URL:
                <Upload
                  classiName="imgUpload"
                  {...props}
                  name="profileImage"
                  type="text"
                  value={user.profileImage}
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
                  value={user.rideImage}
                  onChange={handleChange}
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
              <br />
            </div> */}
            <br />
            <Button
              onClick={() => {
                handleUpdate();
                navigate("/profile");
              }}
              id="loginButton"
              htmlType="submit"
            >
              Update
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
}
