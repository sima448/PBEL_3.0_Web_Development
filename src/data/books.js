import reactBook from "../assets/React_Basics.jpg";
import javascriptBook from "../assets/JavaScript_Guide.jpg";
import nodejsBook from "../assets/Nodejs_Mastery.jpg";
import pythonBook from "../assets/Python_Essentials.jpg";
import htmlCssBook from "../assets/HTML_CSS.jpg";
import mongodbBook from "../assets/Learning_MongoDB.jpg";



const books = [
  {
    id: 1,
    title: "React Basics",
    author: "Sebastian Springer",
    price: "₹499",
    oldPrice: "₹1019",
    discount: "30% OFF",
    image: reactBook,
    category: "Programming",
    rating: "4.5⭐",
    description:
      "Learn the fundamentals of React, including components, props, state management, and building interactive user interfaces.",
  },
  {
    id: 2,
    title: "JavaScript Guide",
    author: "David Flanagan",
    image: javascriptBook,
    category: "Programming",
    price: "₹599",
    oldPrice: "₹1209",
    discount: "35% OFF",
    rating: "4.7⭐",
    description:
      "A complete guide to modern JavaScript covering ES6+, functions, objects, asynchronous programming, and web development.",
  },
  {
    id: 3,
    title: "Node.js Mastery",
    author: "Dr. Liew Voon Kiong",
    image: nodejsBook,
    category: "Programming",
    price: "₹699",
    oldPrice: "₹1099",
    discount: "32% OFF",

    rating: "4.8⭐",
    description:
      "Master backend development with Node.js, Express.js, REST APIs, routing, middleware, and server-side programming.",
  },
  {
    id: 4,
    title: "Python Essentials",
    author: "Eric Matthes",
    image: pythonBook,
    category: "Science",
    price: "₹549",
    oldPrice: "₹999",
    discount: "30% OFF",

    rating: "4.6⭐",
    description:
      "An easy-to-follow introduction to Python programming, covering variables, loops, functions, data structures, and projects.",
  },
  {
    id: 5,
    title: "HTML & CSS Design",
    author: "Jon Duckett",
    image: htmlCssBook,
    category: "Programming",
    price: "₹449",
    oldPrice: "₹1199",
    discount: "30% OFF",
    rating: "4.7⭐",
    description:
      "Learn how to design beautiful and responsive websites using HTML5, CSS3, layouts, forms, and modern web techniques.",
  },
  {
    id: 6,
    title: "Learning MongoDB",
    author: "Kristina Chodorow",
    image: mongodbBook,
    category: "Science",
    price: "₹649",
    oldPrice: "₹1399",
    discount: "30% OFF",
    rating: "4.5⭐",
    description:
      "Understand MongoDB databases, collections, CRUD operations, indexing, aggregation, and integration with Node.js.",
  },
];

export { books };
