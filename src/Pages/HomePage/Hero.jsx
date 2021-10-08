import useWindowSize from "../../utility/ScreenSize";
export default function Hero() {
  const [height,width] = useWindowSize();
  const HeroContainerStyle = {
    minHeight: width < 900 ? height /1.2  - 70 : height - 70 ,

    // minWidth:"250px",
  };
  return (
    <div className="HeroContainer fx  " style={HeroContainerStyle}>
      <div className="HeroSectionLeft fx  fxJustifyStart fxCol M20V ">
        <div className="ColorTagsContainer fxJustifyStart fx  M10H ">
          <span className=" ColorTags fx ">
            <h5 className="ColorTagsText"> UX UI DESIGN </h5>
          </span>
        </div>
        <div className="HeroHeadingContainer fx  fxJustifyStart M10H">
          <div className="HeroHeadingSub">
            <h1 className="HeroHeading">Let’s Turn your amazing ideas </h1>
            <span className="HeroHeadingHighlighter fx fxJustifyStart ">
              <h1 className="HeroHeading">into </h1>
              <span className="fx fxCol M20V">
                reality.
                <span
                  className="LogoStroke"
                  style={{ backgroundImage: "url(./assets/logoStrock.svg)" }}
                ></span>
              </span>
            </span>
          </div>
        </div>
        <div className="HeroSupportHeadingContainer fx fxJustifyStart M10H">
          <h4 className="HeroSupportHeading">
            This is me how are you well done my dear friend we are doing very
            well thankyou !
          </h4>
        </div>
        <div className="HeroActionContainer fx fxJustifyStart">
          <a href="#" className="SingUPBtn fx M20H">Sign Up</a>
          <a href="#" className="VideoWatch fx M20V P12">
            <img src="./assets/play.svg" alt="Play" />
          </a>
        </div>
      </div>
      <div className="HeroSectionRight fx  ">
        <Well />
      </div>
      {/* <HeroBgHelper /> */}
    </div>
  );
}

const HeroBgHelper = () => {
  return (
    <section className="CylinderContainer fx P10V">
      <div className="ScrollDownContainer fx M10H">
        <div className="ScrollDownIconContainer fx">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="33"
            viewBox="0 0 30 33"
            fill="none"
          >
            <path
              d="M13.663 32.0734C14.444 32.8544 15.7104 32.8544 16.4914 32.0734L29.2193 19.3455C30.0004 18.5644 30.0004 17.2981 29.2193 16.517C28.4383 15.736 27.172 15.736 26.3909 16.517L15.0772 27.8308L3.7635 16.517C2.98245 15.736 1.71612 15.736 0.935074 16.517C0.154025 17.2981 0.154025 18.5644 0.935074 19.3455L13.663 32.0734ZM13.0772 0.65918L13.0772 30.6592H17.0772V0.65918L13.0772 0.65918Z"
              fill="#656262"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
const Well = () => {
  return (
    <div className="HeroFaceContainer">
      <img src="assets/3dWall2.png"  alt="3dWall"/>
    </div>
  );
};
