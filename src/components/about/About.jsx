import styled from "styled-components";
import smilingMuslim from "../../assets/halal.png";
import { forwardRef } from "react";

const companyName = "Halal Haven";
const StyledSection = styled.section`
  ${({ $isBigScreen, $currentPage }) =>
    !$isBigScreen
      ? `
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background: var(--primary);

  `
      : `
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0%;
    left: 0%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    background: var(--primary);
    align-items: center;

    transform: translateX(${100 * (1 - $currentPage)}%);
    opacity: ${$currentPage === 1 ? "1" : "0"};
    visibility: ${$currentPage === 1 ? "visible" : "hidden"};
    transition: 0.3s ease;
  `}

  & .image-container {
    position: relative;
    width: 12rem;
    height: 12rem;
    border-radius: 0.2rem;
    overflow: hidden;
  }
  & .certificate {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .about {
    padding: 0.5rem;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  & h4,
  p {
    font-weight: 500;
  }
  & .about h3 {
    color: var(--accent-2);
    font-weight: 900;
  }

  & .about p {
    text-align: justify;
    padding: 0.5rem;
    font-size: 1.2rem;
    line-height: 2;
  }
`;

const About = forwardRef(({ currentPage, windowWidth }, ref) => {
  return (
    <StyledSection
      ref={ref}
      $currentPage={currentPage}
      $isBigScreen={windowWidth > 992}
    >
      <div className="image-container">
        <img src={smilingMuslim} alt="smiling-muslim" className="certificate" />
      </div>
      <div className="about">
        <h4>about:</h4>
        <h3>what is halal haven ?</h3>
        <p>
          Welcome to {companyName}, where tradition meets quality. We provide
          high-quality products that seamlessly fit into your everyday life
          while adhering to Islamic principles. Our diverse range includes
          stylish modest clothing and everyday essentials, all carefully
          selected for quality and ethical production. We strive to make your
          shopping experience simple and trustworthy. Thank you for choosing{" "}
          {companyName}. We look forward to being part of your daily life.{" "}
        </p>
      </div>
    </StyledSection>
  );
});
export default About;
