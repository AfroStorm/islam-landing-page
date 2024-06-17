import styled from "styled-components";
import Backdrop from "./Backdrop";

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background: var(--primary);
  z-index: ${({ $zIndex }) => $zIndex};
  transform: ${({ $isHidden }) =>
    $isHidden ? "translateX(-100%)" : "translateX(0%)"};
  opacity: ${({ $isHidden }) => ($isHidden ? "0" : "1")};
  transition: 0.3s ease;

  & .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  & .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

const StyledNavLinkItem = styled.li`
  & .nav-link-btn {
    border: none;
    background: transparent;
    font-size: 2rem;
    font-weight: 900;
    color: var(--accent-2);
    transform: ${({ $isHidden }) =>
      $isHidden ? "translateY(100%)" : "translateY(0%)"};
    opacity: ${({ $isHidden }) => ($isHidden ? "0" : "1")};
    transition: ${({ $isHidden }) => ($isHidden ? "none" : "0.6s ease")};
    transition-delay: ${({ $index }) => `${($index + 1) * 0.1}s`};
  }
`;

const StyledSocialLinkItem = styled.li`
  & .icon {
    font-size: 3rem;
    color: var(--accent-2);
    transform: ${({ $isHidden }) =>
      $isHidden ? "translateY(100%)" : "translateY(0%)"};
    opacity: ${({ $isHidden }) => ($isHidden ? "0" : "1")};
    transition: ${({ $isHidden }) => ($isHidden ? "none" : "0.6s ease")};
    transition-delay: 0.6s;
  }
`;

const MobileMenu = ({
  isHidden,
  handleMobileMenu,
  navLinks,
  socialMediaLinks,
  scrollToSection,
}) => {
  const zIndex = 101; // add z-index for Backdrop and MobileMenu
  return (
    <>
      <Backdrop
        zIndex={zIndex}
        isHidden={isHidden}
        handleMobileMenu={handleMobileMenu}
      />

      <StyledDiv $zIndex={zIndex} $isHidden={isHidden}>
        <ul className="nav-links">
          {navLinks.map((data, index) => {
            const { id, name } = data;

            return (
              <StyledNavLinkItem key={id} $isHidden={isHidden} $index={index}>
                <button
                  className="nav-link-btn"
                  type="button"
                  onClick={() => {
                    scrollToSection(name);
                    handleMobileMenu();
                  }}
                >
                  {name}
                </button>
              </StyledNavLinkItem>
            );
          })}
        </ul>

        <ul className="social-links">
          {socialMediaLinks.map((data, index) => {
            const { id, link, Icon } = data;

            return (
              <StyledSocialLinkItem
                key={id}
                $isHidden={isHidden}
                $index={index}
              >
                <a href={link}>
                  <Icon className={"icon"} />
                </a>
              </StyledSocialLinkItem>
            );
          })}
        </ul>
      </StyledDiv>
    </>
  );
};
export default MobileMenu;
