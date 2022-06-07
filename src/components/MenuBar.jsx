import { AppBar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "../styling/menuBar.css";

export default function MenuBar() {
  return (
    <>
      <input
        class="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
