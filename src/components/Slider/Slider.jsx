import Tab from "../Tab/Tab";
import family from "../../assets/images/homepage/family-gathering-mobile@2x.jpg";
import familyTablet from "../../assets/images/homepage/family-gathering-tablet@2x.jpg";
import familyDesktop from "../../assets/images/homepage/family-gathering-desktop@2x.jpg";
import special from "../../assets/images/homepage/special-events-mobile@2x.jpg";
import specialTablet from "../../assets/images/homepage/special-events-tablet@2x.jpg";
import specialDesktop from "../../assets/images/homepage/special-events-desktop@2x.jpg";
import social from "../../assets/images/homepage/social-events-mobile@2x.jpg";
import socialTablet from "../../assets/images/homepage/social-events-tablet@2x.jpg";
import socialDesktop from "../../assets/images/homepage/social-events-desktop@2x.jpg";

function Slider() {
  const tabs = [
    {
      title: "Family Gathering",
      description:
        "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
      content: { mobile: family, tablet: familyTablet, desktop: familyDesktop },
    },
    {
      title: "Special Events",
      description:
        "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
      content: {
        mobile: special,
        tablet: specialTablet,
        desktop: specialDesktop,
      },
    },
    {
      title: "Social Events",
      description:
        "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
      content: { mobile: social, tablet: socialTablet, desktop: socialDesktop },
    },
  ];
  return <Tab tabs={tabs} />;
}

export default Slider;
