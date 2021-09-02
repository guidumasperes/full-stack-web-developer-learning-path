//Most basic type of variable: var

var container = 5;
console.log(container);
container = "Hello JS!"; //var is mutable
console.log(container);
var a = 4, b = 5, c = "hey hey!!!"; //multi-assignment
console.log(a, b, c);
var empty;//you can just declare and leave it there
console.log(empty);
empty = 10239;
console.log(empty);

//Beware: var is globally scoped !!!
var number = 5;
console.log("original number is:", number);

function showNumber() {
    number = 7;
    console.log("in showNumber() is:", number);
}

showNumber();
console.log("after showNumber() is:", number); //Since we change in showNumber and it's global the number changes outside too

//The "let" statement defines a block-scoped local variable: only defined in its current block
function showNumberAgain() {
    let number = 8;
    console.log("in showNumberAgain() is:", number);
}

showNumberAgain();
console.log("after showNumberAgain() is:", number);
//Rule of thumb: when you want a mutable variable use "let"

//Const: a block-scoped constant, it's the same as "let" but it's "unmutable"
//When const does not break ?
const book = {
    title: "Harry Potter",
    author: "J. K. Rowling"
}
console.log(book);
book.title = "Harry Potter And The Philosopher's Stone";
console.log(book);
/* When it breaks ? (Commented, because a still want to use this js file)
const aLittleNumber = 93849385
console.log(aLittleNumber)
aLittleNumber = 1
console.log(aLittleNumber)
*/

/*
JS is a weakly typed language, you don't need to say if it's an integer, an float, an bool
you just need to state if it's a const, var or let
To know what type a variable is use: "typeof"
*/ 
console.log("book is:", typeof book);
console.log("number is:", typeof number);

//Comparisons
let numberA = 5;
let numberB = "5";
console.log("Weak comparison:", numberA == numberB); //Weak comparison
console.log("Strong comparison:", numberA === numberB); //Strong comparison
numberB = "five";
console.log("Changing numberB to string 'five'");
console.log("Weak comparison:", numberA == numberB);
console.log("Strong comparison:", numberA === numberB);

//We have other symbols: !==, !=, >, <, <=, >=

//Math symbols are the commons: +, -, /, %, **(exp)
//You also have:
let numberC = 10;
console.log("pre increment:", ++numberC); //pre increment
console.log("post increment:(after accessing again)", numberC++); //post increment
console.log("post increment:(before accesing again)", numberC);