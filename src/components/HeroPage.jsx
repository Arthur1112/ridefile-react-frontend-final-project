import "../styling/titleCards2.0.css";
import HeroTitle from "./HeroTitle";
import { ReactComponent as YourSvgtitleCardOneSvg } from "../svg/carDashboardIconsSvg/engine-coolant.svg";
import { ReactComponent as YourSvgtitleCardTwoSvg } from "../svg/carDashboardIconsSvg/warning.svg";
import { ReactComponent as YourSvgtitleCardThreeSvg } from "../svg/carDashboardIconsSvg/doors.svg";

export default function HeroPage() {
  return (
    <section>
      <HeroTitle />
      <main className="container">
        <div className="card">
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
        <div className="card">
          <div className="face face1">
            <div>
              <YourSvgtitleCardTwoSvg className="titleSvg" />
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
        <div className="card">
          <div className="face face1">
            <div>
              <YourSvgtitleCardThreeSvg className="titleSvg" />
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
      </main>
    </section>
  );
}
