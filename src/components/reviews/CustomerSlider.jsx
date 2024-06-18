import styled from "styled-components";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import SingleSlide from "./SingleSlide";
import { useState } from "react";

const StyledUl = styled.ul`
  position: relative;
  width: 100vw;
  max-width: 40rem;
  height: 45rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  overflow: hidden;

  & .arrow-btn {
    position: absolute;
    top: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    z-index: 99;
  }

  & .arrow-btn.left-btn {
    left: 0;
  }
  & .arrow-btn.right-btn {
    right: 0;
  }

  & .arrow-icon {
    font-size: 2rem;
    color: var(--accent-2);
  }
`;

const CustomerSlider = ({ userData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCustomerSlide = (btnDirection) => {
    btnDirection === "prev"
      ? setCurrentSlide((oldSlide) => {
          const result = (oldSlide - 1 + userData.length) % userData.length;
          return result;
        })
      : setCurrentSlide((oldSlide) => {
          const result = (oldSlide + 1) % userData.length;
          return result;
        });
  };

  return (
    <StyledUl>
      <button className="arrow-btn left-btn">
        <MdArrowBackIosNew
          className="arrow-icon"
          onClick={() => handleCustomerSlide("prev")}
        />
      </button>
      <button className="arrow-btn right-btn">
        <MdArrowForwardIos
          className="arrow-icon"
          onClick={() => handleCustomerSlide("next")}
        />
      </button>

      {userData.map((data, index) => {
        return (
          <SingleSlide
            key={data.id}
            {...data}
            currentSlide={currentSlide}
            slideIndex={index}
          />
        );
      })}
    </StyledUl>
  );
};
export default CustomerSlider;
