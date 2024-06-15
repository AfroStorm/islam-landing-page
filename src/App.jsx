import styled from "styled-components";
import Home from "./components/home/Home";
import NavBar from "./components/general/NavBar";
import { useEffect, useState } from "react";
import MobileMenu from "./components/general/MobileMenu";
import navLinks from "./appData/navLinks";
import socialMediaLinks from "./appData/socialMediaLinks";
import About from "./components/about/About";
import backgroundImage from "./assets/morocco.jpg";

const StyledMain = styled.main`
  overflow: hidden;

  & .background-img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: url(${backgroundImage});
    background-clip: content-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    z-index: -1;
    opacity: 0.65;
    filter: contrast(0.5);
  }
  /* & .background-img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.6;
    filter: contrast(0.5);
  } */
`;

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHidden, setIsHidden] = useState(true);
  const [currentTab, setCurrentTab] = useState(0);

  const handleCurrentTab = (chosenTab) => {
    setCurrentTab(chosenTab);
  };

  const handleMobileMenu = () => {
    setIsHidden(!isHidden);
  };

  // Effect to update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set up event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledMain>
      <img src={backgroundImage} alt="cordoba" className="background-img" />

      <MobileMenu
        isHidden={isHidden}
        handleMobileMenu={handleMobileMenu}
        navLinks={navLinks}
        socialMediaLinks={socialMediaLinks}
        handleCurrentTab={handleCurrentTab}
      />
      <NavBar
        windowWidth={windowWidth}
        handleMobileMenu={handleMobileMenu}
        navLinks={navLinks}
        socialMediaLinks={socialMediaLinks}
        handleCurrentTab={handleCurrentTab}
      />
      <Home currentTab={currentTab} />
      <About currentTab={currentTab} />
    </StyledMain>
  );
}

export default App;
