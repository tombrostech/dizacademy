import {  Route, Switch } from 'react-router-dom';

import "./App.css";
import "./MobileCss.css";
import Hero from "./Pages/HomePage/Hero";
import useWindowSize from "./utility/ScreenSize";
import NavBar from "./Pages/HomePage/NavBar";
import ThinkOut from "./Pages/SecondPage/ThinkOut";
import DragToShow from "./Pages/ThirdPage/DragToShow";
import StudentsWork from "./Pages/FourthPage/StudentsWork";
import Coursers from "./Pages/CoursersPage/Coursers";
import Reviews from "./Pages/ReviewsPage/Reviews";
import Footer from "./Pages/FooterPage/Footer";
function App() {
  const width = useWindowSize()[1];
  const MainContainerStyle = {
    maxWidth: `${width - (width / 100) * 12}px`,
    // maxWidth:"1380px"
  };
  return (
    <>
        
    
      <NavBar />
      <div id="MainContainer" style={MainContainerStyle}>
        <Hero />
        <ThinkOut />
        <DragToShow />
        <StudentsWork />
        <Coursers />
        <Reviews />
        <Footer />
      </div>
    </>
  );
}

export default App;
