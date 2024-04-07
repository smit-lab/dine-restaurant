import style from "./button.module.css";

function Button({ text, btnType }) {
  return (
    <a
      href="#"
      className={`${style.btn} ${style[btnType]} leagueSpartan semibold`}
    >
      {text}
    </a>
  );
}

export default Button;
