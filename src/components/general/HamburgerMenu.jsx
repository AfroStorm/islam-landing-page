import styled, { keyframes } from "styled-components";

const shrink = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
`;
const StyledDiv = styled.button`
  display: inline-block;
  height: 100%;
  background: var(--primary);
  width: 6.5rem;
  margin-right: 0.5rem;
  border-radius: 0.1rem;
  padding: 0.4rem;
  border: none;
  transform: skewX(-10deg);
  translate: 1.2rem;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease;
  box-shadow: var(--strong-shadow);

  & .lines {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.2rem;
    margin-left: 0.2rem;
    width: 80%;
    height: 100%;
  }

  & .lines:hover .line {
    background: var(--accent-1);
  }

  & .lines:active .line {
    animation: ${shrink} 0.3s forwards;
  }

  & .line {
    padding: 0.3rem;
    border-radius: 0.2rem;
    width: 100%;
    background: var(--accent-2);
    transition: all 0.3s ease;
  }
`;

const HamburgerMenu = ({ handleMobileMenu }) => {
  return (
    <StyledDiv onClick={handleMobileMenu}>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </StyledDiv>
  );
};
export default HamburgerMenu;
