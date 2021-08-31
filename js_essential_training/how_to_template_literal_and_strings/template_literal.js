import Book from "../practice_objs/Book.js"

/* Template literal
   `` -> back ticks -> tells the browser that anything inside them is a template literal
   meaning we can mix html and strigs with js expressions to create templates 
*/

const book = new Book(
    "Black",
    1.4,
    "Edgar Allan Poe",
    "The Raven",
    "Mystery"
);

const content = `
    <section>
        <h1>Book description</h1>
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Genre: ${book.genre}</p>
        <p>Weight: ${book.weight}</p>
        <p>Color: ${book.color}</p>
    </section>
`;

document.body.innerHTML = content;