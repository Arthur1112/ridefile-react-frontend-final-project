import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProfileButton() {
  let navigate = useNavigate();
  return (
    <Button variant="contained" onClick={() => navigate("/profile")}>
      Profile
    </Button>
  );
}
