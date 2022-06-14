import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export const AnonRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  return !!user ? <Navigate to="/profile" replace /> : children;
};
