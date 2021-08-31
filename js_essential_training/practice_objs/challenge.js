import Book from "./Book.js";

const theWitcher = new Book(
    "black",
    0.3,
    "Andrzej Sapkowski",
    "The Witcher",
    "Fantasy"
);
const harryPotter = new Book(
    "brown",
    0.2,
    "J. K. Rowling",
    "Harry Potter",
    "Fantasy"
);
const twilight = new Book(
    "black",
    0.2,
    "Stephenie Meyer",
    "Twilight",
    "Romance"
);
const hamlet = new Book(
    "white",
    0.4,
    "William Shakespeare",
    "Hamlet",
    "Drama"
);
const gameOfThrones = new Book(
    "black",
    0.5,
    "George R. R. Martin",
    "Game Of Thrones",
    "Fantasy"
);

console.log(theWitcher);
console.log(harryPotter);
console.log(twilight);
console.log(hamlet);
console.log(gameOfThrones);