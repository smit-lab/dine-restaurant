import style from "./feature.module.css";
import mountainImage from "../../assets/images/homepage/enjoyable-place-mobile@2x.jpg";
import mountainImageTablet from "../../assets/images/homepage/enjoyable-place-tablet@2x.jpg";
import mountainImageDesktop from "../../assets/images/homepage/enjoyable-place-desktop@2x.jpg";
import locallySourcedDesktop from "../../assets/images/homepage/locally-sourced-desktop@2x.jpg";
import locallySourcedTablet from "../../assets/images/homepage/locally-sourced-tablet@2x.jpg";
import locallySourced from "../../assets/images/homepage/locally-sourced-mobile@2x.jpg";

import dividePattern from "../../assets/images/patterns/pattern-divide.svg";

function Feature() {
  const IMAGES = [
    {
      image: mountainImage,
      imageTablet: mountainImageTablet,
      imageDesktop: mountainImageDesktop,
      title: ["Enjoyable place", "for all the family"],
      para: "Our relaxed surroundings make dining us a great experience for everyone. We can arrange a tour of the farm before your meal.",
    },
    {
      image: locallySourced,
      imageTablet: locallySourcedTablet,
      imageDesktop: locallySourcedDesktop,
      title: ["The most locally", "sourced food"],
      para: "All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.",
    },
  ];
  return (
    <div className={style.featureContainer}>
      {IMAGES.map((image, index) => (
        <div key={index} className={style.feature}>
          <picture>
            <source
              media="(min-width: 1025px)"
              srcSet={`${image.imageDesktop} 2x`}
            />
            <source
              media="(min-width: 500px)"
              srcSet={`${image.imageTablet} 2x`}
            />
            <img
              src={image.image}
              alt=""
              srcSet={`${image.image} 2x`}
              className={style.image}
            />
          </picture>

          <div className={style.textContainer}>
            <img src={dividePattern} alt="" className={style.pattern} />
            <h1 className={`${style.heading} bold`}>
              {image.title.map((text, i) => (
                <span
                  style={{ fontSize: "inherit", fontWeight: "inherit" }}
                  key={i}
                >
                  {text}
                  <br />
                </span>
              ))}
            </h1>
            <p className={`${style.para} regular`}>{image.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feature;
