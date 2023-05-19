import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    to: "/",
    text: "Home",
  },
  {
    id: nanoid(),
    to: "/tweets",
    text: "Tweets",
  },
];

export default items;
