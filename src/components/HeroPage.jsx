import "../styling/titleCards2.0.css";
import HeroTitle from "./HeroTitle";
import { ReactComponent as YourSvgtitleCardOneSvg } from "../svg/carDashboardIconsSvg/engine-coolant.svg";
import { ReactComponent as YourSvgtitleCardTwoSvg } from "../svg/carDashboardIconsSvg/warning.svg";
import { ReactComponent as YourSvgtitleCardThreeSvg } from "../svg/carDashboardIconsSvg/doors.svg";
import YourSvgLogo from "../svg/carDashboardIconsSvg/logoR.svg";
import { Image } from "antd";

export default function HeroPage() {
  return (
    <section>
      <img
        style={{ width: "3%", position: "fixed" }}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQzLjIxIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJFYmVuZV8yIiBkYXRhLW5hbWU9IkViZW5lIDIiPjxnIGlkPSJFYmVuZV8xLTIiIGRhdGEtbmFtZT0iRWJlbmUgMSI+PHBhdGggZD0ibTMxIDMyLjE0YzYuMzYtMi4zNSAxMC43MS03LjQzIDEwLjcxLTE1LjV2LS4xNGExNS43MyAxNS43MyAwIDAgMCAtNC4yOC0xMS40M2MtMy4yOS0zLjI4LTguMjItNS4wNy0xNC41Ny01LjA3aC0yMi44NnY1MGgxMXYtNDAuMDdoMTAuOTNjNS4zNiAwIDguNjQgMi40MyA4LjY0IDcuMTR2LjE0YzAgNC4yMi0zLjA3IDcuMDgtOC40MyA3LjA4aC00LjcxdjkuNzFoMi4yMWwxMC43MiAxNmgxMi44NXptLTE3Ljg2LTcuODV2OS43MWgyLjE1di05LjcxeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg=="
      />
      <HeroTitle />
      <main className="container">
        <div id="cardOne" className="card">
          <div className="face face1">
            <div>
              <YourSvgtitleCardOneSvg className="titleSvg" />
              <h3>About Ridefile</h3>
            </div>
          </div>
          <div className="face face2">
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              esse corporis, velit porro impedit laudantium accusamus! Id velit,
              illum magni rem mollitia blanditiis iste maiores optio ipsa, est
              dolorem fugit. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Eius esse corporis, velit porro impedit laudantium
              accusamus! Id velit, illum magni rem mollitia blanditiis iste
              maiores optio ipsa, est dolorem fugit.
            </p>
          </div>
        </div>
        <div id="cardTwo" className="card">
          <div className="face face1">
            <div>
              <YourSvgtitleCardTwoSvg className="titleSvg" />
              <h3>How to use RideFile</h3>
            </div>
          </div>
          <div className="face face2">
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              esse corporis, velit porro impedit laudantium accusamus! Id velit,
              illum magni rem mollitia blanditiis iste maiores optio ipsa, est
              dolorem fugit. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Eius esse corporis, velit porro impedit laudantium
              accusamus! Id velit, illum magni rem mollitia blanditiis iste
              maiores optio ipsa, est dolorem fugit.
            </p>
          </div>
        </div>
        <div id="cardThree" className="card">
          <div className="face face1">
            <div>
              <YourSvgtitleCardThreeSvg className="titleSvg" />
              <h3>Future of RideFile</h3>
            </div>
          </div>
          <div className="face face2">
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              esse corporis, velit porro impedit laudantium accusamus! Id velit,
              illum magni rem mollitia blanditiis iste maiores optio ipsa, est
              dolorem fugit. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Eius esse corporis, velit porro impedit laudantium
              accusamus! Id velit, illum magni rem mollitia blanditiis iste
              maiores optio ipsa, est dolorem fugit.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
