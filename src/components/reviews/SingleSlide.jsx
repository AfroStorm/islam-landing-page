import styled from "styled-components";
import { LiaStarSolid } from "react-icons/lia";
import { v4 as uuid4 } from "uuid";
import React from "react";

const StyledLi = styled.li`
  position: absolute;
  top: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  ${({ $currentSlide, $slideIndex }) =>
    `transform: translateX(${100 * ($slideIndex - $currentSlide)}%);
     opacity: ${$currentSlide === $slideIndex ? "1" : "0"};
     visibility: ${$currentSlide === $slideIndex ? "visible" : "hidden"};
    `}
  transition: 0.3s ease;

  & .img-container {
    position: relative;
    text-align: center;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    overflow: hidden;
  }

  & .img-container img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  & .review-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  }
  & .review {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  }

  & .review div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  & .star-icon {
    font-size: 2rem;
    color: gold;
  }
  & .review-text {
    text-align: justify;
    font-size: 1.2rem;
    line-height: 2;
  }
  & .review-text,
  .user-name,
  .age {
    padding: 0.5rem;
    font-weight: 500;
    color: white;
  }
  & .user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

const SingleSlide = ({
  image,
  userName,
  age,
  reviewText,
  numOfStars,
  currentSlide,
  slideIndex,
}) => {
  const starIcon = <LiaStarSolid className="star-icon" />;
  const RepeatElement = ({ times, element }) => {
    return (
      <div>
        {Array.from({ length: times }, (_) =>
          React.cloneElement(element, { key: uuid4() })
        )}
      </div>
    );
  };

  return (
    <StyledLi $currentSlide={currentSlide} $slideIndex={slideIndex}>
      <div className="img-container">
        <img src={image} alt="user-image" />
      </div>

      <div className="review-container">
        <div className="review">
          <div>
            <RepeatElement times={numOfStars} element={starIcon} />
          </div>
          <p className="review-text">{reviewText}</p>
        </div>

        <div className="user-info">
          <h5 className="user-name">{userName}</h5>
          <h5 className="age">{age}</h5>
        </div>
      </div>
    </StyledLi>
  );
};
export default SingleSlide;
