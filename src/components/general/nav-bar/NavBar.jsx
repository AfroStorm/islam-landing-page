import styled from "styled-components";
import HamburgerMenu from "../HamburgerMenu";
import arabicFont from "../../../assets/fonts/bassun.otf";
import DropDown from "./DropDown";
import { useState } from "react";

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
    box-shadow: var(--light-shadow);
  }

  & .logo h3 {
    display: inline-block;
    padding: 0 2rem;
    font-family: "arabic-font";
    font-size: 1.8rem;
    color: var(--accent-2);
  }

  & .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-right: 2rem;
    height: 100%;
    border-radius: 0.1rem;
    background: var(--primary);
    transform: skewX(-10deg);
    translate: 1rem;
    box-shadow: var(--light-shadow);
  }

  & .link-btn {
    border: none;
    background: transparent;
    width: 6rem;
    font-size: 1.3rem;
    font-weight: 900;
    color: var(--accent-2);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  & .link-btn:hover,
  & .link-btn:active {
    color: var(--accent-1);
    font-size: 1.4rem;
  }
`;

const NavBar = ({
  windowWidth,
  handleMobileMenu,
  navLinks,
  socialMediaLinks,
  handleCurrentPage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropDown = (boolean) => {
    setIsOpen(boolean);
  };

  return (
    <StyledNavBar>
      <div className="logo">
        <h3>Halal Haven</h3>
      </div>

      {windowWidth >= 992 ? (
        <ul className="links">
          <DropDown
            socialMediaLinks={socialMediaLinks}
            handleDropDown={handleDropDown}
            isOpen={isOpen}
          />

          {navLinks.map((link, index) => {
            const { id, name } = link;
            return (
              <li key={id} className="link">
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => handleCurrentPage(index)}
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <HamburgerMenu handleMobileMenu={handleMobileMenu} />
      )}
    </StyledNavBar>
  );
};
export default NavBar;
