import style from "./highlightmenu.module.css";
import salmon from "../../assets/images/homepage/salmon-mobile@2x.jpg";
import salmonDesktop from "../../assets/images/homepage/salmon-desktop-tablet@2x.jpg";
import beef from "../../assets/images/homepage/beef-mobile@2x.jpg";
import beefDesktop from "../../assets/images/homepage/beef-desktop-tablet@2x.jpg";
import chocolate from "../../assets/images/homepage/chocolate-mobile@2x.jpg";
import chocolateDesktop from "../../assets/images/homepage/chocolate-desktop-tablet@2x.jpg";
import dividePattern from "../../assets/images/patterns/pattern-divide.svg";

function HighlightMenu() {
  const DISHES = [
    {
      image: salmon,
      imageDesktop: salmonDesktop,
      title: "Seared Salmon Fillet",
      description:
        "Our locally sourced salmon served with a refreshing bukwheat summer salad.",
    },
    {
      image: beef,
      imageDesktop: beefDesktop,
      title: "Rosemary Fillet Mignon",
      description: "Our prime beef served to your taste seasonal sides.",
    },
    {
      image: chocolate,
      imageDesktop: chocolateDesktop,
      title: "Summer Fruit Chocolate Mousse",
      description:
        "Creamy mousse combined with summer fruits and dark chocolate shavings.",
    },
  ];
  return (
    <div className={style.highlightMenu}>
      <div className={style.textContainer}>
        <img src={dividePattern} alt="" className={style.pattern} />
        <h1 className={`${style.heading} bold`}>
          A few highlights from <br />
          our menu
        </h1>
        <p className={style.para}>
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </div>
      <div className={style.menuContainer}>
        {DISHES.map((dish, index) => (
          <div key={index} className={style.menuItem}>
            <div className={style.menuContent}>
              <picture>
                <source
                  media="(min-width: 700px)"
                  srcSet={`${dish.imageDesktop} 2x`}
                />
                <source media="(max-width: 500px)" srcSet={dish.image} />
                <img
                  src={dish.image}
                  alt=""
                  srcSet={dish.image}
                  className={style.menuDishImage}
                />
                <hr />
              </picture>
              <div className={style.menuText}>
                <h3 className={`${style.menuTextHeading} bold`}>
                  {dish.title}
                </h3>
                <p className={style.menuTextPara}>{dish.description}</p>
              </div>
            </div>
            <hr className={style.divider} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighlightMenu;
