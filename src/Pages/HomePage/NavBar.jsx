import { useEffect, useState } from "react";
import useWindowSize from "../../utility/ScreenSize";
import { motion, useCycle, AnimatePresence } from "framer-motion";
export default function NavBar() {
  useEffect(() => {
    const highlighter = document.querySelectorAll(".HeaderLink");
    highlighter.forEach((elem) => {
      const x = elem.getBoundingClientRect().x;
      // console.log(elem.getBoundingClientRect());
      // console.log(x);

      elem.addEventListener("mouseover", () => {});
    });
  }, []);
  const [height, width] = useWindowSize();
  const minWidth = {
    minWidth: width / 6,
  };
  const [toggleSideNav, setSideNav] = useState(0);
  const [open, cycleOpen] = useCycle(false, true);

  const MobileOptions = () => {
    return (
      <div className="AvatarDivMobile ">
        <div className="AvatarMobContainer fx">
          <span className="UserAvatar fx">
            <img src="../assets/avatar.svg" alt="notification" />
          </span>
          <a href="#" className="HeaderMore fx">
            options
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 14l-4-4h8z" fill="rgba(149,164,166,1)" />
            </svg>
          </a>
        </div>
      </div>
    );
  };

  const SideNav = () => {
    const SideBarCal = {
      width: `${width / 2}px`,
    };

    return (
      <motion.section
        initial={{ width: 400 }}
        animate={{ width: 400 }}
        exit={{
          width: 0,
          transition: { duration: 2},
        }}
        // animate={{ width: toggleSideNav }}
        transition={{ duration: 0.3 }}
        className="SideBarContainer fx"
        style={SideBarCal}
      >
        {/* <CloseBtn /> */}
      </motion.section>
    );
  };

  const CloseBtn = () => {
    return (
      <motion.div 
      className="closeBtn fx" onClick={cycleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="34"
          height="34"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            fill="#ffffff"
          />
        </svg>
      </motion.div>
    );
  };
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.6,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  

  return (
    <AnimatePresence>
      <header className="NavBarContainer fx P30H ">
        <SideNav />
        <div className="MenuContainer" style={minWidth}>
          <span className="menuIcon fx" onClick={cycleOpen}>
            <img src="../assets/menuIcon.svg" alt="MenuIcon" />
          </span>
        </div>
        <div className="LogoContainer fx" style={minWidth}>
          <span className="Logo">
            <img src="../assets/logoIcon.svg" alt="MenuIcon" />
          </span>
        </div>
        {width > 900 ? (
          <div className="MenuLinkContainer fx" style={minWidth}>
            <span className="MenuHighlighter"></span>
            <a href="#" className="HeaderLink">
              Course
            </a>
            <a href="#" className="HeaderLink">
              Affiliate
            </a>
            <span className="HeaderLinkIcon fx">
              <img src="../assets/notiBell.svg" alt="notification" />
            </span>
            <span className="HeaderLinkIcon UserAvatar fx">
              <img src="../assets/avatar.svg" alt="notification" />
            </span>
          </div>
        ) : (
          <MobileOptions />
        )}
      </header>
    </AnimatePresence>
  );
}
