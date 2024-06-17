import styled from "styled-components";
import Home from "./components/home/Home";
import NavBar from "./components/general/NavBar";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./components/general/MobileMenu";
import navLinks from "./appData/navLinks";
import socialMediaLinks from "./appData/socialMediaLinks";
import About from "./components/about/About";
import Service from "./components/service/Service";
import WhyUs from "./components/why-us/WhyUs";
import whyUsData from "./appData/whyUs";

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
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const serviceSectionRef = useRef(null);
  const whyUsSectionRef = useRef(null);

  // Mobile nav handling
  const scrollToSection = (sectionId) => {
    let sectionRef;
    switch (sectionId) {
      case "Home":
        sectionRef = homeSectionRef;
        break;
      case "About":
        sectionRef = aboutSectionRef;
        break;
      case "Service":
        sectionRef = serviceSectionRef;
        break;
      case "Why Us":
        sectionRef = whyUsSectionRef;
        break;

      default:
        break;
    }

    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMobileMenu = () => {
    setIsHidden(!isHidden);
  };

  // Big nav handling
  const handleCurrentTab = (chosenTab) => {
    setCurrentTab(chosenTab);
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
        scrollToSection={scrollToSection}
      />
      <NavBar
        windowWidth={windowWidth}
        handleMobileMenu={handleMobileMenu}
        navLinks={navLinks}
        socialMediaLinks={socialMediaLinks}
        handleCurrentTab={handleCurrentTab}
      />
      <Home
        currentTab={currentTab}
        windowWidth={windowWidth}
        ref={homeSectionRef}
      />
      <About
        currentTab={currentTab}
        windowWidth={windowWidth}
        ref={aboutSectionRef}
      />
      <Service
        currentTab={currentTab}
        windowWidth={windowWidth}
        ref={serviceSectionRef}
      />
      <WhyUs
        currentTab={currentTab}
        windowWidth={windowWidth}
        ref={whyUsSectionRef}
      />
    </StyledMain>
  );
}

export default App;
