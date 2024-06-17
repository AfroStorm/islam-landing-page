import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";
import arabicFont from "../../assets/fonts/bassun.otf";

const StyledNavBar = styled.nav`
  @font-face {
    font-family: "arabic-font";
    src: url(${arabicFont}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }

  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 3.7rem;
  z-index: 100;

  & .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 0.1rem;
    background: var(--primary);
    transform: skewX(-10deg);
    translate: -1rem;
    box-shadow: var(--strong-shadow);
  }

  & .logo h3 {
    display: inline-block;
    padding: 0 2rem;
    font-family: "arabic-font";
    font-size: 1.8rem;
    color: var(--accent-2);
  }
`;

const NavBar = ({
  windowWidth,
  handleMobileMenu,
  navLinks,
  socialMediaLinks,
}) => {
  return (
    <StyledNavBar>
      <div className="logo">
        <h3>Halal Haven</h3>
      </div>
      {windowWidth === 992 ? (
        "ul"
      ) : (
        <HamburgerMenu handleMobileMenu={handleMobileMenu} />
      )}
    </StyledNavBar>
  );
};
export default NavBar;
