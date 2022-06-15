import "../styling/footer.css";
import Linkedin from "../svg/socialIcons/Linkedin.png";
import FaceBook from "../svg/socialIcons/Facebook.png";
import Instagram from "../svg/socialIcons/Instagram.png";
import Twitter from "../svg/socialIcons/Twitter.png";
import Youtube from "../svg/socialIcons/Youtube.png";

export default function Footer() {
  return (
    <section id="footerContainer">
      <p id="footerPara">&copy; 2022 RideFile</p>
      <section id="socialContainer">
        <img className="socialImages" src={Linkedin} />
        <img className="socialImages" src={FaceBook} />
        <img className="socialImages" src={Instagram} />
        <img className="socialImages" src={Twitter} />
        <img className="socialImages" src={Youtube} />
      </section>
    </section>
  );
}
