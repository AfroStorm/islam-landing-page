import { v4 as uuid4 } from "uuid";
import muslimOwner from "../assets/muslim-owner.jpg";

const whyUsData = [
  {
    id: uuid4(),
    name: "Comprehensive Learning:",
    description:
      "Access authentic Qur'an translations, Hadith collections, and scholarly insights for deepening understanding and spiritual growth.",
  },
  {
    id: uuid4(),
    name: "Daily essentials:",
    description:
      "Explore a range of halal-certified essentials—from groceries to personal care items—that meet religious dietary and lifestyle requirements.",
  },
  {
    id: uuid4(),
    name: "Family-Oriented :",
    description:
      "Engage in family-oriented learning with resources tailored for all ages, promoting Islamic values and knowledge within households.",
  },
  {
    id: uuid4(),
    name: "Community Support:",
    description:
      "Join a vibrant community with interactive forums, live Q&A sessions, and educational events fostering dialogue and mutual support in faith practice.",
  },
];

export const whyUsImage = muslimOwner;

export default whyUsData;
