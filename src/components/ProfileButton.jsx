import { useNavigate } from "react-router-dom";

export default function ProfileButton() {
  let navigate = useNavigate();
  return (
    <button variant="contained" onClick={() => navigate("/profile")}>
      Profile
    </button>
  );
}
