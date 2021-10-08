import React, { useState } from "react";
let i = 2
export default function Reviews() {
  const ReviewData = [
    { id: 1, name: "Ashish", BgImage: "assets/studentwork1.png" },
    { id: 2, name: "Abhi", BgImage: "assets/studentwork2.png" },
    {
      id: 3,
      name: "Vineet",
      BgImage: "assets/studentwork3.png",
      data: "A carousel in React is a slideshow, or a series, of several images. A React carousel is built with the help of CSS transitions and JavaScript coding. A carousel in React can include any element, like image, text, videos, markups, etc. In React, you can create a carousel that has an interactive control like a forward",
    },
  ];

  const [Cindex, setCIndex] = useState(ReviewData);
  const [ReviewText, setReviewText] = useState(ReviewData[2].data);

  const DataProcess = (index, elem, item) => {
    i++;
    if (i > index) {
      Cindex.shift();
      // console.log(Cindex, index, "less");
      const RData = [ ...Cindex , { data: i, name: `Amit${i}` , BgImage: "assets/studentwork5.png"} ];
      setCIndex(RData);
    }
    if (i < index) {
      Cindex.pop();
      // console.log(Cindex, index, "grater");
      const RData = [{ data: i, name: `Amit${i}` , BgImage: "assets/studentwork5.png"},...Cindex];
      setCIndex(RData);
    }
    setReviewText(item.name);
  };
  
  const ReviewInfo = () => {
    return (
      <div className="ReviewInfoConatiner fx fxJustifyStart fxCol P20">
        <div className="ReviewQuotes fx fxJustifyStart ">
          <img src="assets/Quotes1.svg" alt="Quotes1" />
        </div>
        <div className="ReviewUnit fx fxCol fxJustifyStart">
          <h4 className="ReviewUnitText">
            <div className="ReviewStar fx fxJustifyStart">
              <span className="ReviewStartCont">
                <img src="assets/star.svg" alt="star" />
              </span>
              <span className="ReviewStartCont">
                <img src="assets/star.svg" alt="star" />
              </span>
              <span className="ReviewStartCont">
                <img src="assets/star.svg" alt="star" />
              </span>
              <span className="ReviewStartCont">
                <img src="assets/star.svg" alt="star" />
              </span>
              <span className="ReviewStartCont">
                <img src="assets/star.svg" alt="star" />
              </span>
            </div>
            {ReviewText}
          </h4>
        </div>
        <div className="ReviewQuotes fx fxJustifyEnd ">
          <img src="assets/Quotes2.svg" alt="Quotes1" />
        </div>
      </div>
    );
  };
  return (
    <div className="ReviewsContainer fx fxCol fxJustifyStart fxAlignStart  M20">
      <div className="GridHeadingContainer fx fxCol fxJustifyStart fxAlignStart M4H">
        <h1 className="GridHeading">Reviews</h1>
        {/* <p className="GridSubHeading">short description</p> */}
        <div className="HighLighterContainer">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="ReviewSubContainer fx fxJustifyStart P20H">
        <div className="ReviewUserContainer fx fxCol M30H fxJustifyStart fxAlignStart ">
          {Cindex.map((item, index) => {
            return (
              <div
                key={Math.random().toString()}
                className={`ReviewUserCard fx P12 fxJustifyStart ${
                  index === 1 && "Active"
                }`}
                onClick={(elem) => {
                  index !== 1 && DataProcess(index, elem.target, item);
                }}
              >
                <div className="ReviewUserAvatar ">
                  <img src={item.BgImage} alt="ReviewUserAvatar" />
                </div>
                <div className="ReviewUserInfo fx fxJustifyStart fxAlignStart fxCol M20V">
                  <h4 className="ReviewUserName">{item.name}</h4>
                  <h6 className="ReviewUserPost">Founder</h6>
                </div>
              </div>
            );
          })}
        </div>
        <div className="ReviewUserText  fx fxJustifyEnd">
          <ReviewInfo />
        </div>
      </div>
    </div>
  );
}
