import Book from "../practice_objs/Book.js"

const book = new Book(
    "Black",
    1.4,
    "Edgar Allan Poe",
    "The Raven",
    "Mystery"
);

//This is the old way of mixing strings, html and js
//Now the most common way is to use template literals!
const content = "<h1>" + book.title + "</h1>";

document.body.innerHTML = content;