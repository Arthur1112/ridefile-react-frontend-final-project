import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import "../styling/menuBar.css";

export default function MenuBar() {
  let navigate = useNavigate();
  const { checked, setChecked } = useContext(UserContext);

  return (
    <>
      <input
        checked={checked}
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
        onClick={() => {
          setChecked((old) => !old);
        }}
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
            <a
              onClick={() => {
                setChecked((old) => !old);
                navigate("/profile");
              }}
            >
              Profile
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setChecked((old) => !old);
                navigate("/profile");
              }}
            >
              Logout
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setChecked((old) => !old);
                navigate("/login");
              }}
            >
              Login
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setChecked((old) => !old);
                navigate("/");
              }}
            >
              Home
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
