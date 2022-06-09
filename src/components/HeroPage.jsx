import "../styling/titleCardStyling.css";
import HeroTitle from "./HeroTitle";

export default function HeroPage() {
  return (
    <section className="mainPage">
      <HeroTitle />
      <section>
        <div id="columnOne">
          <img src="https://wallpapercave.com/wp/wp8333356.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, blanditiis soluta iste quae aliquid libero alias
            officia eius? Quasi, non. Reprehenderit dolor itaque voluptate
            voluptates ea! Facere reprehenderit delectus quisquam.
          </p>
        </div>
        <div id="columnOne">
          <img src="https://wallpapercave.com/wp/wp8333429.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, blanditiis soluta iste quae aliquid libero alias
            officia eius? Quasi, non. Reprehenderit dolor itaque voluptate
            voluptates ea! Facere reprehenderit delectus quisquam.
          </p>
        </div>
        <div id="columnThree">
          <img src="https://wallpapercave.com/wp/wp8333524.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, blanditiis soluta iste quae aliquid libero alias
            officia eius? Quasi, non. Reprehenderit dolor itaque voluptate
            voluptates ea! Facere reprehenderit delectus quisquam.
          </p>
        </div>
      </section>
    </section>
  );
}
