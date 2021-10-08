import React from "react";

export default function Coursers() {
  const dt = [
    { BgImage: "assets/studentwork1.png" },
    { BgImage: "assets/studentwork2.png" },
    { BgImage: "assets/studentwork4.png" },
    { BgImage: "assets/studentwork3.png" },
  ];
  return (
    <div className="GridContainer fx fxCol fxJustifyStart fxAlignStart M20 M50H">
      <div className="GridHeadingContainer fx fxCol fxJustifyStart fxAlignStart M4H ">
        <h1 className="GridHeading">Courses</h1>
        {/* <p className="GridSubHeading">short description</p> */}
        <div className="HighLighterContainer">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="GridItemContainer fx M50H fxJustifyStart fxWrap ">
        {dt.map((item,index) => {
          return (
            <div
            key={index.toString()}

              className="GridItemDiv fx  "
              style={{
                backgroundImage: `url(${item.BgImage})`,
              }}
            >
              <div className="GridSubDiv fx fxJustifyStart fxAlignStart  P20">
                <div className="GridAvatar">
                <img src="assets/HeroImage.png" alt="GridAvatar"/>
                </div>
                <div className="GridAvatarName fx M20V">
                  <h5 className="GridAvatarHeading">Name</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="enrollContainer fx ">
        <div className="EnrollHero fx fxSize1" >
          <img src="/assets/EnrollHeroOne.png"  alt="EnrollHeroOne"/>
        </div>
        <div className="EnrollHero fx fxSize1">
          <a href="#" className="SingUPBtn fx M20H">Enroll Now </a>
        </div>

        <div className="EnrollHero fx fxSize1">
          <img src="/assets/EnrollHeroTwo.png" alt="EnrollHeroTwo"/>
        </div>
      </div>
    </div>
  );
}
