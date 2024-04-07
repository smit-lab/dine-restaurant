import Button from "../ui/Button/Button";
import style from "./reservation.module.css";

function Reservation() {
  return (
    <div className={style.reservationContainer}>
      <h1 className={`${style.heading} bold`}>Ready to make a reservation?</h1>
      <Button text={"book a table"} btnType={"primary"} />
    </div>
  );
}

export default Reservation;
