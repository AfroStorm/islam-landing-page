import styled from "styled-components";
import Home from "./components/home/Home";
import NavBar from "./components/general/NavBar";
import { useEffect, useState } from "react";
import MobileMenu from "./components/general/MobileMenu";
import navLinks from "./appData/navLinks";
import services from "./appData/services";
import socialMediaLinks from "./appData/socialMediaLinks";
import About from "./components/about/About";
import backgroundImage from "./assets/morocco.jpg";
import Service from "./components/service/Service";

const StyledMain = styled.main`
  width: 100vw;
  ${({ $isBigScreen }) =>
    $isBigScreen &&
    `  
    position: relative;
    height: 100vh;
`}
  overflow: hidden;
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
    <StyledMain $isBigScreen={windowWidth > 992}>
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
      <Home currentTab={currentTab} windowWidth={windowWidth} />
      <About currentTab={currentTab} windowWidth={windowWidth} />
      <Service
        currentTab={currentTab}
        windowWidth={windowWidth}
        services={services}
      />
    </StyledMain>
  );
}

export default App;
