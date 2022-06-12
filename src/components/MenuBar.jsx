import { useNavigate } from "react-router-dom";
import "../styling/menuBar.css";
import LogoutButton from "./LogoutButton";

export default function MenuBar() {
  let navigate = useNavigate();

  return (
    <>
      <input
        class="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label htmlFor="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5">
          <li>
            <a onClick={() => navigate("/login")}>Login</a>
          </li>
          <li>
            <a onClick={() => navigate("/profile")}>Profile</a>
          </li>
          <li>
            <a onClick={() => navigate("/")}>Home</a>
          </li>
          {/* <li>
            <a onClick={() => navigate("/followers")}>Followers</a>
          </li> */}
          <li>
            <a onClick={() => navigate("/Login")}>Logout</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
