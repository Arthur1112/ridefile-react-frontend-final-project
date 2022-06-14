import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import Login from "./Login";
import ProfilePage from "./ProfilePage";

export const LoggedInRoute = () => {
  const { token } = useContext(UserContext);

  return <div>{!token ? <Login /> : <ProfilePage />}</div>;
};
