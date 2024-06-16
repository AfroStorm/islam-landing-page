import styled from "styled-components";
import { MdDoubleArrow } from "react-icons/md";
import { v4 as uuid4 } from "uuid";

const StyledSection = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;

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

const Service = ({ currentTab, windowWidth, services }) => {
  return (
    <StyledSection $currentTab={currentTab} $isBigScreen={windowWidth > 992}>
      <h4 className="title">services:</h4>

      {services.map((service) => {
        const { id, name, description, features } = service;
        return (
          <div key={id} className="service-container">
            <h3 className="name">{name}</h3>
            <p className="description">{description}</p>

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
};
export default Service;
