import styled from "styled-components";

const StyledSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  transform: ${({ $currentTab }) => `translateX(${100 * (0 - $currentTab)}%)`};
  opacity: ${({ $currentTab }) => ($currentTab === 0 ? "1" : "0")};
  visibility: ${({ $currentTab }) =>
    $currentTab === 0 ? "visible" : "hidden"};
  transition: 0.3s ease;

  & .introduction {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
    width: 100%;
    height: 10rem;
  }

  & .catchphrase,
  & .support-text {
    margin-left: 1.5rem;
    font-weight: 900;
    color: white;
  }

  & .catchphrase {
    font-size: 2.2rem;
  }
  & .catchphrase span {
    color: var(--primary);
  }
  & .support-text {
    font-size: 1.3rem;
  }

  & .call-to-action {
    text-align: center;
    margin-top: 7rem;
    transform: skewX(-10deg);
    box-shadow: var(--lightest-shadow);
  }

  & .call-to-action button {
    width: 10rem;
    height: 3.5rem;
    font-size: 1.3rem;
    font-weight: 900;
    color: var(--accent-2);
    background-color: var(--primary);
    border-radius: 0.1rem;
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  & .call-to-action button:hover,
  & .call-to-action button:active {
    color: var(--accent-1);
    font-size: 1.4rem;
  }
`;
const Home = ({ currentTab }) => {
  return (
    <StyledSection $currentTab={currentTab}>
      <div className="introduction">
        <h1 className="catchphrase">
          Crafted with Care <br /> <span>Rooted</span> in Faith.
        </h1>
        <p className="support-text">Where Quality Meets Devotion.</p>
      </div>

      <div className="call-to-action">
        <button>Start Here</button>
      </div>
    </StyledSection>
  );
};
export default Home;
