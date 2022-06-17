import { useNavigate } from "react-router-dom";
import "../styling/logoutButton.css";

export default function LogoutButton({ token }) {
  let navigate = useNavigate();
  return (
    <div id="logoutButtonContainer">
      <button
        id="logoutButton"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
}
