import React from "react";

export default function Footer() {
  const FloatingCard =(props) =>{
    return(
      <div className="floatingCard fx fxCol P10" style={props.styles}>
        <h2 className="floatingCardHeading">{props.cardNum}+</h2>
        <h5 className="floatingCardText">{props.text}</h5>
      </div>
    )
  }
  return (
    <div className="FooterContainer M50H fx fxCol ">
      <FloatingCard cardNum={"1 k"} text="Affiliators"  styles={{right:"10%" , top:"0%"}}/>
      <FloatingCard cardNum={"2 Cr"} text="Distributed"  styles={{right:"35%" , top:"30%"}}/>
      <FloatingCard cardNum={"10 k "} text="Students"  styles={{right:"35%" , top:"10%"}}/>
      <FloatingCard cardNum={"1 Cr+ "} text="Total Reword"  styles={{right:"-5%" , top:"30%"}}/>



      <div className="FooterHeroHeading fx P20 M50H fxJustifyStart">
        <div className="HeroHeadingSub">
          <h1 className="HeroHeading">
            Engaging & Growth oriented platform for{" "}
          </h1>
          <span className="HeroHeadingHighlighter fx fxJustifyStart ">
            <h1 className="HeroHeading">into our </h1>
            <span className="fx fxCol M20V">
              affiliators.
              <span
                className="LogoStroke"
                style={{ backgroundImage: "url(../assets/logoStrock.svg)" }}
              ></span>
            </span>
          </span>
        </div>
      </div>
      <div className="FooterBarContainer fx fxCol fxJustifyStart fxAlignStart M50H ">
        <div className="FooterBarHeading M10H">
          <h1>KickStart your journey as a creative entrepreneur now </h1>
        </div>
        <a href="#" className="SingUPBtn fx M20H ">
        JOIN AFFILIATE
        </a>
      </div>
      <div className="FooterHero">
        <img src="/assets/FooterHero.svg" alt="footerHero"/>
      </div>
    </div>
  );
}
