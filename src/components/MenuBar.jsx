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
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Followers</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
