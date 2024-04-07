import logo from "../../assets/images/logo.svg";
import style from "./footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <div>
        <img src={logo} alt="" className={style.logo} />
      </div>
      <div className={style.footerTextContainer}>
        <p className={style.footerText}>
          marthwaite, sedbergh
          <br />
          cumbria
          <br />
          <span>+00 44 123 4567</span>
        </p>
        <div>
          <p className={style.footerText}>
            open times
            <br />
            mon - fri: 09:00am - 10:00am
            <br />
            sat - sun: 09:00am - 12:00pm
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
