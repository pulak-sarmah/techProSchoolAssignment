import { v4 as uuidv4 } from "uuid";

// usualy this data would have come from backend...
export const courseCardData = [
  {
    title: "MERN Full Stack Mastery: A Comprehensive Guide",
    subtitle: "Comprehensive Training in MongoDB, Express, React, and Node.js",
    image: "Mern.png",
    price: "3999",
    id: uuidv4(),
  },

  {
    title: "Java Programming: A Deep Dive into Core Concepts",
    subtitle: "A Deep Dive into Java Programming Concepts",
    image: "java.png",
    price: "2999",
    id: uuidv4(),
  },

  {
    title: "Machine Learning Mastery: Fundamentals to Advanced",
    subtitle: "Master the Fundamentals and Advanced Concepts in ML",
    image: "ml.png",
    price: "4999",
    id: uuidv4(),
  },
];
