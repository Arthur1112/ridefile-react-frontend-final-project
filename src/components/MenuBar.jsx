import { useNavigate } from "react-router-dom";
import "../styling/menuBar.css";
import LogoutButton from "./LogoutButton";

export default function MenuBar({ token }) {
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
          {/* {!token ? (
            <>
              <li>
                <a onClick={() => navigate("/profile")}>Profile</a>
              </li>
              <li>
                <a onClick={() => navigate("/Login")}>Logout</a>
              </li>
            </>
          ) : (
            <li>
              <a onClick={() => navigate("/login")}>Login</a>
            </li>
          )} */}
          <li>
            <a onClick={() => navigate("/profile")}>Profile</a>
          </li>
          <li>
            <a onClick={() => navigate("/Login")}>Logout</a>
          </li>
          <li>
            <a onClick={() => navigate("/login")}>Login</a>
          </li>
          <li>
            <a onClick={() => navigate("/")}>Home</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
