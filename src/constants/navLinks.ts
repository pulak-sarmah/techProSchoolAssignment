// it will generate random unique id, we can pass it in as a keyProp
import { v4 as uuidv4 } from "uuid";

export const navLinks = [
  { link: "Courses", id: uuidv4(), active: true },
  { link: " About", id: uuidv4(), active: false },
  { link: " Career", id: uuidv4(), active: false },
  { link: " Contact", id: uuidv4(), active: false },
];
