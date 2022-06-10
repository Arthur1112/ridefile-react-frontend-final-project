import { useNavigate } from "react-router-dom";

export default function LogoutButton({ token }) {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => {
        localStorage.clear();
        navigate("/login");
        window.location.reload();
      }}
    >
      Logout
    </button>
  );
}
