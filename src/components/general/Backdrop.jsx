import styled from "styled-components";

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${({ $zIndex }) => $zIndex};
  visibility: ${({ $isHidden }) => ($isHidden ? "hidden" : "visible")};
  opacity: ${({ $isHidden }) => ($isHidden ? "0" : "1")};
  transition: 0.3s ease;
`;
const Backdrop = ({ zIndex, isHidden, handleMobileMenu }) => {
  return (
    <StyledDiv
      $zIndex={zIndex}
      $isHidden={isHidden}
      onClick={handleMobileMenu}
    ></StyledDiv>
  );
};
export default Backdrop;
