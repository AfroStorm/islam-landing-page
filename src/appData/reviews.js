import youngMuslima from "../assets/young-muslima.jpg";
import muslimFamily from "../assets/muslim-family.jpg";
import muslimCouple from "../assets/muslim-couple.jpg";
import { v4 as uuid4 } from "uuid";

const userData = [
  {
    id: uuid4(),
    image: muslimCouple,
    userName: "Yusuf Abdullah",
    age: 26,
    numOfStars: 5,
    reviewText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit vel magniperspiciatis consectetur? Dignissimos nulla omnis laborum veniam corporisaut voluptatum reiciendis facere ipsam earum, itaque neque culpa, iure.",
  },
  // {
  //   id: uuid4(),
  //   image: youngMuslima,
  //   userName: "Fatima Abbas",
  //   age: 22,
  //   numOfStars: 4,
  //   reviewText:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit vel magniperspiciatis consectetur? Dignissimos nulla omnis laborum veniam corporisaut voluptatum reiciendis facere ipsam earum, itaque neque culpa, iure.",
  // },
  // {
  //   id: uuid4(),
  //   image: muslimFamily,
  //   userName: "Ahmad Barakat",
  //   age: 33,
  //   numOfStars: 4,
  //   reviewText:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit vel magniperspiciatis consectetur? Dignissimos nulla omnis laborum veniam corporisaut voluptatum reiciendis facere ipsam earum, itaque neque culpa, iure.",
  // },
];

export default userData;
