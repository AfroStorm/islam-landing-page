import styled from "styled-components";
import { MdDoubleArrow } from "react-icons/md";
import servicesData from "../../appData/services";
import { v4 as uuid4 } from "uuid";
import { forwardRef } from "react";

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
    margin-top: 2rem;
  `
      : `
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(${100 * (2 - $currentPage)}%);
    opacity: ${$currentPage === 2 ? "1" : "0"};
    visibility: ${$currentPage === 2 ? "visible" : "hidden"};
    transition: 0.3s ease;
  `}

  & .service-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 0.5rem;
    max-width: 40rem;
  }

  & .title,
  & .description,
  .features {
    color: white;
    font-weight: 500;
  }

  & .name {
    color: var(--primary);
    font-weight: 900;
  }
  & .img-desc-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  & .image {
    width: 100%;
    height: 100%;
    max-width: 30rem;
    object-fit: cover;
    border-radius: 0.2rem;
  }
  & .description {
    text-align: justify;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2;
  }

  & .features {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  }

  & .feature {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  & .icon {
    flex: 0.5;
    font-size: 2rem;
    color: var(--complementary);
  }

  & .feature-text {
    font-size: 1.2rem;
    font-weight: 900;
    flex: 10;
  }
`;

const Service = forwardRef(({ currentPage, windowWidth }, ref) => {
  return (
    <StyledSection
      ref={ref}
      $currentPage={currentPage}
      $isBigScreen={windowWidth > 992}
    >
      <h4 className="title">services:</h4>

      {servicesData.map((service) => {
        const { id, name, description, image, features } = service;
        return (
          <div key={id} className="service-container">
            <h3 className="name">{name}</h3>
            <div className="img-desc-container">
              <img src={image} alt={name} className="image" />
              <p className="description">{description}</p>
            </div>

            <ul className="features">
              {features.map((feature) => {
                return (
                  <li key={uuid4()} className="feature">
                    <div>
                      <MdDoubleArrow className="icon" />
                    </div>
                    <h5 className="feature-text">{feature}</h5>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </StyledSection>
  );
});
export default Service;
