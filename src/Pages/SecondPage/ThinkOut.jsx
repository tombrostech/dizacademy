import React from "react";
import useWindowSize from "../../utility/ScreenSize";

export default function ThinkOut() {
  const [height] = useWindowSize();
  
  const ThinkOutContainer = {
    height: height - 70,
  };
  const BgTextLow = () => {
    return (
      <div className="BgTextLow">
        <h1 className="BgText">Think Different</h1>
      </div>
    );
  };
  return (
    <div className="ThinkOutContainer fx M30H M100H " style={ThinkOutContainer}>
      <div className="ThinkLeft fx fxCol fxAlignStart">
      <BgTextLow />
        <div className="ThinkHeroHeadingContainer M10H">
          <h1 className="ThinkHeroHeading">Think Out of the box</h1>
        </div>
        <div className="ThinkSubHeadingContainer M20H ">
          <h4 className="ThinkSubHeading">
            This is me how are you well done my dear friend we are doing very
            well thankyou ! This is me how are you well done my dear friend we
            are doing very well thankyou ! This is me how are you well done my
            dear friend we are doing very well thankyou ! This is me how are you
            well done my dear friend we are doing very well thankyou !
          </h4>
        </div>
        <div className="HeroActionContainer fx fxJustifyStart M10H">
          <a href="#" className="SingUPBtn fx M20H">Enroll Now </a>
          <a href="#" className="VideoWatch fx M20V P12">
            <img src="./assets/Play.svg" alt="Play" />
          </a>
        </div>
      </div>
      <div className="ThinkRight">
        <img src="assets/ThinkHero.png" alt="ThinkHero" />
      </div>
    </div>
  );
}
