import React from "react";
import useWindowSize from "../../utility/ScreenSize";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function DragToShow() {
  const [height] = useWindowSize();
  const ThinkOutContainer = {
    height: height / 1.1,
  };
  const BgTextLow = (props) => {
    return (
      <div className="BgTextLow" style={props.styles}>
        <h1 className="BgText" style={{ fontSize: "15em", lineHeight: 1 }}>
          {props.text}
        </h1>
      </div>
    );
  };
  const BgStyle = (left, top) => {
    return {
      left: left,
      top: top,
    };
  };

  return (
    <div className="CompareContainer fx  M100H" style={ThinkOutContainer}>
      <div className="CompareDiv fx  fxJustifyStart">
        <BgTextLow text="UX" styles={BgStyle("-50%", "-15%")} />
        <div className="CompareIconContainers fx fxCol fxAlignStart  fxJustifyEnd">
          <div className="CompareIconBox">
            <img src="assets/figma.svg" alt="Figma" />
          </div>
          <div className="CompareIconBox">
            <img src="assets/affinity.svg" alt="affinity" />
          </div>
          <div className="CompareIconBox">
            <img src="assets/after-effects-cc.svg" alt="aftereffects" />
          </div>
          <div className="CompareIconBox">
            <img src="assets/blender.svg" alt="blender" />
          </div>
        </div>
      </div>
      <div className="CompareDiv CompareSlider">
        <ReactCompareSlider 
        style={{ height:`100%`}}

          itemOne={
            <ReactCompareSliderImage src="assets/EnrollHeroOne.png" srcSet="assets/grd1.png" alt="Image one"  
            
            />
          }
          itemTwo={
            <ReactCompareSliderImage src="assets/EnrollHeroTwo.png" srcSet="assets/grd2.png" alt="Image two" />
          }
        />
      </div>
      <div className="CompareDiv ">
        <BgTextLow text="UI" styles={BgStyle("10%", "60%")} />
        <div className="CompareIconContainers fx fxCol fxAlignEnd  fxJustifyEnd">
          <div className="CompareIconBox">
            <img src="assets/figma.svg" alt="figma" />
          </div>
          <div className="CompareIconBox">
            <img src="assets/affinity.svg" alt="affinity" />
          </div>
          <div className="CompareIconBox">
            <img src="assets/after-effects-cc.svg" alt="aftereffects" />
          </div>
          <div className="CompareIconBox">
            <img src="assets/blender.svg" alt="blender" />
          </div>
        </div>
      </div>
    </div>
  );
}
