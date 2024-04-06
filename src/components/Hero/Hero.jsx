import style from "./hero.module.css";
import heroImage from "../../assets/images/homepage/hero-bg-mobile@2x.jpg";
import heroImageDesktop from "../../assets/images/homepage/hero-bg-desktop@2x.jpg";
import heroImageTablet from "../../assets/images/homepage/hero-bg-tablet@2x.jpg";
import logo from "../../assets/images/logo.svg";
import Button from "../ui/Button/Button";

function Hero() {
  return (
    <div className={style.hero}>
      <picture>
        <source media="(min-width: 900px)" srcSet={heroImageDesktop} />
        <source media="(min-width: 500px)" srcSet={heroImageTablet} />

        <img
          src={heroImage}
          srcSet={heroImage}
          alt=""
          className={style.heroImage}
        />
      </picture>
      <div className={style.heroTextContainer}>
        <img src={logo} alt="" className={style.logo} />
        <h1 className={`${style.heading} leagueSpartan light`}>
          Exquisite dining
          <br /> since 1989
        </h1>
        <p className={`${style.para} leagueSpartan regular`}>
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <Button text={"book a table"} />
      </div>
    </div>
  );
}

export default Hero;
