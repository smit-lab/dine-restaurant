import Button from "../ui/Button/Button";
import style from "./tab.module.css";
import { useState } from "react";

function Tab({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  function tabClick(index) {
    setActiveTab(index);
  }
  return (
    <div className={style.tabContainer}>
      <div className={style.imageContainer}>
        <picture>
          <source
            media="(min-width: 1025px)"
            srcSet={tabs[activeTab].content.desktop}
          />
          <source
            media="(min-width: 500px)"
            srcSet={tabs[activeTab].content.tablet}
          />

          <img
            src={tabs[activeTab].content.mobile}
            srcSet={tabs[activeTab].content.mobile}
            alt=""
            className={style.image}
          />
        </picture>
      </div>
      <div className={style.contentContainer}>
        <div className={style.titleButtonContainer}>
          {tabs.map((tab, index) => (
            <div
              className={style.title}
              key={index}
              onClick={() => tabClick(index)}
            >
              <h1
                className={`${
                  index === activeTab ? style.active : style.inactive
                } ${style.titleButton} semibold`}
              >
                {tab.title}
              </h1>
              <hr
                className={
                  index === activeTab
                    ? style.activeUnderline
                    : style.inactiveUnderline
                }
              />
            </div>
          ))}
        </div>
        <div className={style.textContainer}>
          <h1 className={`${style.heading} bold`}>{tabs[activeTab].title}</h1>
          <p className={style.description}>{tabs[activeTab].description}</p>
          <Button text={"book a table"} btnType={"secondary"} />
        </div>
      </div>
    </div>
  );
}

export default Tab;
