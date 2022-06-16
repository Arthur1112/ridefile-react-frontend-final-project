import "../styling/loadingAnimation.css";
import { ReactComponent as YourSvg134 } from "../svg/Loader/wheel.svg";

export default function Loader() {
  return (
    <div className="spinnerDiv">
      <YourSvg134 className="loaderSvg" />
    </div>
  );
}
