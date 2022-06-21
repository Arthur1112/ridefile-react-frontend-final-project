import "../styling/titleCards2.0.css";
import "../App.css";
import HeroTitle from "./HeroTitle";
import { ReactComponent as YourSvgtitleCardOneSvg } from "../svg/carDashboardIconsSvg/engine-coolant.svg";
import { ReactComponent as YourSvgtitleCardTwoSvg } from "../svg/carDashboardIconsSvg/warning.svg";
import { ReactComponent as YourSvgtitleCardThreeSvg } from "../svg/carDashboardIconsSvg/doors.svg";
import Footer from "./Footer";

export default function HeroPage() {
  return (
    <section id="HeroPage">
      <HeroTitle />
      <main className="container">
        <div id="cardOne" className="card">
          <div className="face face1">
            <div className="svgAndTitleConatainer">
              <YourSvgtitleCardOneSvg className="titleSvg" />
              <h3>About Ridefile</h3>
            </div>
          </div>
          <div className="face face2">
            <p className="content">
              RideFile was created for gear heads and car fanatics. It can be
              very difficult to memorize every detail about your car, and can be
              time consuming to look up the information you need on the spot.
              Wether you are at the mecanics trying to tell them your tiresize
              or at home trying to change your engine oil, it can be annoying
              when you dont have the information ready quick. RideFile allows
              you store these difficult to memorize information all in one
              place, in a simple and straight forward format.
            </p>
          </div>
        </div>
        <div id="cardTwo" className="card">
          <div className="face face1">
            <div className="svgAndTitleConatainer">
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
            <div className="svgAndTitleConatainer">
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
      <Footer />
    </section>
  );
}
