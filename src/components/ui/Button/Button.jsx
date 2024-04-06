import style from "./button.module.css";

function Button({ text }) {
  return (
    <a href="#" className={`${style.btn} leagueSpartan semibold`}>
      {text}
    </a>
  );
}

export default Button;
