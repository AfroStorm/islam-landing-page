import { forwardRef } from "react";
import styled from "styled-components";
import { whyUsImage } from "../../appData/whyUs";
import whyUsData from "../../appData/whyUs";

const StyledSection = styled.section`
  ${({ $isBigScreen, $currentPage }) =>
    !$isBigScreen
      ? `
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding:5rem 0.5rem 0 0.5rem;
    background: white;
  `
      : `
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(${100 * (3 - $currentPage)}%);
    opacity: ${$currentPage === 3 ? "1" : "0"};
    visibility: ${$currentPage === 3 ? "visible" : "hidden"};
    transition: 0.3s ease;
  `}

  & .image {
    width: 100%;
    height: 100%;
    max-width: 30rem;
    object-fit: cover;
    border-radius: 0.2rem;
  }
  & .why-us-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 0.5rem;
    max-width: 40rem;
  }
  & .title {
    font-weight: 500;
    color: var(--text-2);
  }
  & .name {
    color: var(--accent-2);
    font-weight: 900;
    text-align: center;
  }
  & .description {
    text-align: justify;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2;
    color: var(--text-1);
  }
`;

const WhyUs = forwardRef(({ currentPage, windowWidth }, ref) => {
  return (
    <StyledSection
      ref={ref}
      $currentPage={currentPage}
      $isBigScreen={windowWidth > 992}
    >
      <img src={whyUsImage} alt="image" className="image" />
      <h4 className="title">why halal haven:</h4>

      <ul className="why-us-container">
        {whyUsData.map((data) => {
          const { id, name, description } = data;

          return (
            <li key={id} className="data">
              <h3 className="name">{name}</h3>
              <p className="description">{description}</p>
            </li>
          );
        })}
      </ul>
    </StyledSection>
  );
});
export default WhyUs;
