import { useContext, useEffect, useState } from "react";
import "../styling/profilePage.css";
import Login from "./Login";
import LogoutButton from "./LogoutButton";
import { ReactComponent as YourSvg } from "../svg/carDashboardIconsSvg/trunk.svg";
import { ReactComponent as YourSvg2 } from "../svg/carDashboardIconsSvg/rear-window-defrost.svg";
import { ReactComponent as YourSvg3 } from "../svg/carDashboardIconsSvg/air-conditioning.svg";
import { ReactComponent as YourSvg4 } from "../svg/carDashboardIconsSvg/fuel.svg";
import { ReactComponent as YourSvg5 } from "../svg/carDashboardIconsSvg/hazard.svg";
import { ReactComponent as YourSvg6 } from "../svg/carDashboardIconsSvg/light.svg";
import { ReactComponent as YourSvg7 } from "../svg/carDashboardIconsSvg/seatbelt.svg";
import { ReactComponent as YourSvg8 } from "../svg/carDashboardIconsSvg/airbag.svg";
import { ReactComponent as YourSvg9 } from "../svg/carDashboardIconsSvg/ventilating-fan.svg";
import { ReactComponent as YourSvg10 } from "../svg/carDashboardIconsSvg/oil.svg";
import { ReactComponent as YourSvg11 } from "../svg/carDashboardIconsSvg/fuel-filling.svg";
import { ReactComponent as YourSvg12 } from "../svg/carDashboardIconsSvg/battery.svg";
import { UserContext } from "../App";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { user, setUser, token, setToken } = useContext(UserContext);
  let navigate = useNavigate();
  console.log(user);
  return (
    <section id="mainFlexContainer">
      {!token ? (
        <div id="notLoggedInContainer">
          <h3 id="notLogedIn">
            Error: ??? <br />
          </h3>
          <p id="notLogedIn">Please Login First</p>
          <Button onClick={() => navigate("/login")}>Go to Login </Button>
        </div>
      ) : (
        <section id="profileMainContainer">
          <div id="rideImageContainer">
            <img id="rideImage" src={user.rideImage} />
          </div>
          <div>
            <dl id="mainProfileInfo">
              <div id="profileImageContainer">
                <div id="profileImageContainer2">
                  <img id="profileImage" src={user.profileImage} />
                </div>
              </div>
              <dt id="rideMainInfo">
                {user.rideYear} {user.rideMake} {""}
                {user.rideModel}
              </dt>
              <dt id="rideSubInfo">
                Color : {user.rideColor} | Owner : {user.rideOwner} | Vehicle
                Trim : {user.rideTrim}
              </dt>
              <dt></dt>
            </dl>
          </div>
          <dl id="extraProfileInfo">
            <h2>Custom / Stock Vehicle Specs</h2>
            <dt className="tabIconContainer">
              <YourSvg className="dashboardSvg" />
              <p className="tabIconDescription">Transmission:</p>
              <p className="tabIconDescription">{user.transmission}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg2 className="dashboardSvg" />
              <p className="tabIconDescription">Exhaust System:</p>
              <p className="tabIconDescription">{user.exhaustSystem}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg3 className="dashboardSvg" />
              <p className="tabIconDescription">Tire Size:</p>
              <p className="tabIconDescription">{user.rideTireSize}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg4 className="dashboardSvg" />
              <p className="tabIconDescription">Rim Size:</p>
              <p className="tabIconDescription">{user.rideRimSize}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg5 className="dashboardSvg" />
              <p className="tabIconDescription">Rims Info:</p>
              <p className="tabIconDescription">{user.RimsInfo}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg6 className="dashboardSvg" />
              <p className="tabIconDescription">Sound System:</p>
              <p className="tabIconDescription">{user.soundSystem}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg7 className="dashboardSvg" />
              <p className="tabIconDescription">Seats:</p>
              <p className="tabIconDescription">{user.rideSeats}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg8 className="dashboardSvg" />
              <p className="tabIconDescription">Front Brake Pad:</p>
              <p className="tabIconDescription">{user.frontBrakePads}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg9 className="dashboardSvg" />
              <p className="tabIconDescription">Rear Brake Pad:</p>
              <p className="tabIconDescription">{user.rearBrakePads}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg10 className="dashboardSvg" />
              <p className="tabIconDescription">Engine Oil:</p>
              <p className="tabIconDescription">{user.engineOilType}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg11 className="dashboardSvg" />
              <p className="tabIconDescription">Engine Capacity:</p>
              <p className="tabIconDescription">{user.engineOilCapacity}</p>
            </dt>
            <dt className="tabIconContainer">
              <YourSvg12 className="dashboardSvg" />
              <p className="tabIconDescription">Battery Size:</p>
              <p className="tabIconDescription">{user.batterySize}</p>
            </dt>
            <br />
            <LogoutButton />
          </dl>
        </section>
      )}
    </section>
  );
}
