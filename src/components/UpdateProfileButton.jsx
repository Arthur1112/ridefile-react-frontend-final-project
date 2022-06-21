import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import "../styling/logoutButton.css";

export default function UpdateProfileButton() {
  const { user, setUser } = useContext(UserContext);

  let navigate = useNavigate();
  return (
    <div id="logoutButtonContainer">
      <button
        id="logoutButton"
        onClick={() => {
          navigate(`/updateProfile/${user.id}`);
        }}
      >
        Update User Profile
      </button>
    </div>
  );
}
