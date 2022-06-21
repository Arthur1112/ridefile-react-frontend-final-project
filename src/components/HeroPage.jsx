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
              Start using Ridefile by creating a login account. You will need to
              fill out a form to create your profile. The information you fill
              out will populate your profile. This information can be edited at
              anytime. If you upgrade a feature in your vehicle, you should be
              able to upgrade your profile. fugit.
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
              In the future we at RideFile want to transform this web
              application into a mobile app with a more social media aspect. You
              will be able to connect with your friends and see what they are
              running in their vehicles. We will also incorprotate a chat
              feature, allowing you chat live with your friends.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
