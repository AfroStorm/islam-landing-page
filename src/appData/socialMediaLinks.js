import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { v4 as uuid4 } from "uuid";

const socialMediaLinks = [
  {
    id: uuid4(),
    link: "https://www.facebook.com/",
    name: "Facebook",
    Icon: FaSquareFacebook,
  },
  {
    id: uuid4(),
    link: "https://x.com/",
    name: "X",
    Icon: FaSquareXTwitter,
  },
  {
    id: uuid4(),
    link: "https://www.instagram.com/",
    name: "Instagram",
    Icon: FaSquareInstagram,
  },
];

export default socialMediaLinks;
