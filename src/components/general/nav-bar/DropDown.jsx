import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";

const StyledDiv = styled.div`
  display: inline-block;

  & .drop-down-btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background: transparent;
    width: 6rem;
    font-size: 1.7rem;
    font-weight: 900;
    color: var(--accent-2);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  & .drop-down-btn:hover,
  & .drop-down-btn:active {
    color: var(--accent-1);
    font-size: 1.9rem;
  }
  & .drop-down-content {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 3.6rem;
    left: 0;
    background-color: var(--primary);
    min-width: 160px;
    height: 3rem;
    border: none;
    box-shadow: var(--light-shadow-bottom), var(--light-shadow-left),
      var(--light-shadow-right);
    z-index: 99;
  }

  & .drop-down-link {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3rem;
  }
  & .icon {
    font-size: 2rem;
    color: var(--accent-2);
  }

  & .icon:hover,
  & .icon:active {
    color: var(--accent-1);
    font-size: 2.2rem;
  }
`;

function DropDown({ socialMediaLinks, handleDropDown, isOpen }) {
  return (
    <StyledDiv $isOpen={isOpen}>
      <button
        type="button"
        className="drop-down-btn"
        onMouseEnter={() => handleDropDown(true)}
      >
        <IoShareSocialSharp /> <IoMdArrowDropdown />
      </button>
      <ul
        className="drop-down-content"
        onMouseLeave={() => handleDropDown(false)}
      >
        {socialMediaLinks.map((socialLink) => {
          const { id, link, name, Icon } = socialLink;
          return (
            <li key={id} className="drop-down-link">
              <a href={link}>
                <Icon className={"icon"} />
              </a>
            </li>
          );
        })}
      </ul>
    </StyledDiv>
  );
}
export default DropDown;
