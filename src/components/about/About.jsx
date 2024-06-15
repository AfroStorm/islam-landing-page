import styled from "styled-components";
import smilingMuslim from "../../assets/halal.png";

const companyName = "Halal Haven";
const StyledSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  transform: ${({ $currentTab }) => `translateX(${100 * (1 - $currentTab)}%)`};
  opacity: ${({ $currentTab }) => ($currentTab === 1 ? "1" : "0")};
  visibility: ${({ $currentTab }) =>
    $currentTab === 1 ? "visible" : "hidden"};

  transition: 0.3s ease;

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  & .about h4,
  p {
    color: white;
    font-weight: 500;
  }

  & .about h3 {
    color: var(--primary);
    font-weight: 900;
  }

  & .about p {
    text-align: justify;
    padding: 0.5rem;
    font-size: 1.2rem;
    line-height: 2;
  }
`;

const About = ({ currentTab }) => {
  return (
    <StyledSection $currentTab={currentTab}>
      <div className="image-container">
        <img src={smilingMuslim} alt="smiling-muslim" className="certificate" />
      </div>
      <div className="about">
        <h4>our principles</h4>
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
};
export default About;
