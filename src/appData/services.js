import { v4 as uuid4 } from "uuid";
import islamicStudyImg from "../assets/learning.jpg";
import muslimFamily from "../assets/smiling-family.jpg";
const companyName = "Halal Haven";

const serviceData = [
  {
    id: uuid4(),
    name: "Learning Materials",
    description: `At ${companyName}, we support your spiritual growth with a wide range of Islamic study materials. From foundational texts to advanced scholarly works, our collection includes books, educational resources, and digital content for all ages.`,
    image: islamicStudyImg,
    features: [
      "Books on Quranic studies, Hadith, Fiqh, and Islamic history.",
      "Educational materials for children and adults.",
      "E-books, online courses, and webinars by esteemed scholars.",
      "Study aids like Tafsir guides and interactive apps.",
    ],
  },
  {
    id: uuid4(),
    name: "Daily Life Products",
    description: `Discover quality products that fit seamlessly into your daily life while adhering to Islamic principles. Our range includes stylish modest clothing, prayer essentials, halal beauty products, and home decor.`,
    image: muslimFamily,
    features: [
      "Modest fashion for men, women, and children.",
      "High-quality prayer mats and accessories.",
      "Halal-certified beauty and personal care items.",
      "Islamic art and decor for your home.",
      "Daily necessities, including halal-certified food products.",
    ],
  },
];

export default serviceData;
