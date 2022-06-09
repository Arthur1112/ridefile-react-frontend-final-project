import { useNavigate } from "react-router-dom";
import "../styling/menuBar.css";

export default function MenuBar() {
  let navigate = useNavigate();

  return (
    <>
      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label htmlFor="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
          <li>
            <a onClick={() => navigate("/login")}>Login</a>
          </li>
          <li>
            <a onClick={() => navigate("/profile")}>Profile</a>
          </li>
          <li>
            <a onClick={() => navigate("/")}>Home</a>
          </li>
          <li>
            <a onClick={() => navigate("/followers")}>Followers</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
