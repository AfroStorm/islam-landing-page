import { forwardRef } from "react";
import styled from "styled-components";
import userData from "../../appData/reviews";
import CustomerSlider from "./CustomerSlider";

const StyledSection = styled.section`
  ${({ $isBigScreen }) =>
    !$isBigScreen &&
    `
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding:5rem 0.5rem 0 0.5rem;
    background: white;
  `}

  ${({ $isBigScreen, $currentTab }) =>
    $isBigScreen &&
    `
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(${100 * (2 - $currentTab)}%);
    opacity: ${$currentTab === 2 ? "1" : "0"};
    visibility: ${$currentTab === 2 ? "visible" : "hidden"};
    transition: 0.3s ease;
  `}


  background: linear-gradient(
    to bottom,
    var(--primary) 50%,
    var(--secondary) 50%
  );

  & .header p,
  .title {
    color: var(--accent-2);
    font-weight: 900;
    text-align: center;
  }

  & .header p {
    font-size: 1.2rem;
  }

  & .header .title {
    font-size: 1.8rem;
  }
`;

const Reviews = forwardRef(({ currentTab, windowWidth }, ref) => {
  return (
    <StyledSection
      ref={ref}
      $currentTab={currentTab}
      $isBigScreen={windowWidth > 992}
    >
      <div className="header">
        <p>don't just take our word for it...</p>
        <h4 className="title">What our clients are saying</h4>
      </div>

      <CustomerSlider userData={userData} />
    </StyledSection>
  );
});
export default Reviews;
