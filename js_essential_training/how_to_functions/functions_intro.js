//Declaring functions:

//1) Function declaration
function doSomeMath(a, b) {
    let c = a + b;
    return c;
}
// You can override this function by redeclaring it
// Functions declarations are parsed in the way they appeared in the code

//2) Function expression
const doMoreMath = function (a, b) {
    let c = a * b;
    return c;
}
// React uses a lot this type of declaration
// They exist only in the scope they were created

//Calling these functions above
console.log(doSomeMath(2, 3));
console.log(doMoreMath(3, 4));

//Immediately Invoked Function Expression (IIFE)
(function () {
    let a = 1;
    let b = 2;
    let c = doSomeMath(a, b);
    console.log(`The sum of a and b is: ${c}`);
})();

//Arrow functions -> shorter way of writing function expressions

//Normal function expression
const normalFuncExpr = function (num) {
    return num + 1;
}

//Arrow function
const arrowFunc = (num) => {
    return num + 1;
}

console.log("Executing normal function expression", normalFuncExpr(2));
console.log("Executing arrow function", arrowFunc(2));

//You can also have, and others, check MDN
const arrowFuncMod = num => {
    return num + 1;
}

console.log("Executing arrow function mod",  arrowFuncMod(2));

//Arrow functions can only be called after they've been declared
//You can't use them to declare methods 

/*
  Sidebar: if you're using "this" keyword in a method inside an object and you get a odd
  result try turning the function into an arrow function, if it works, it's probably
  because of the function() scope
*/

//Callback function: a function that is passed as a parameter to another function
const sumOne = function (num) {
    return num + 1;
}

const subOne = function (num) {
    return num - 1;
}

function doMath(num, callback) {
    return callback(num);
}

console.log("Passing sumOne:", doMath(1, sumOne));
console.log("Passing subOne:", doMath(1, subOne));

//Conditionals
const myBool = true;
if (myBool) {
    console.log("Is true!");
} else {
    console.log("Is false!");
}

//Conditionals using ternary operator
console.log(!myBool ? "Is false!" : "Is true!");

//Logical operators: || (or), && (and)

//Switch statements
const expr = "computer";

switch (expr) {
    case "smartphone":
        console.log("Not the smartest way to spend on your free time.");
        break;
    case "computer":
        console.log("Go programming instead 'youtubing'.");
        break;
    case "book":
        console.log("Reading it's always useful.");
        break;
    default:
        console.log("You must be a different person.");
        break;
}

//Looping
for (let i = 1; i <= 10; i++) {
    console.log(i);       
}

const myCats = ["Belo", "Lilica", "Mel", "Billy"];

//Classical way of looping in array
for (let i = 0; i < myCats.length; i++) {
    console.log(myCats[i]);
}
console.log("");
//A modern way of looping in array: for...of way
for (const item of myCats) {
    console.log(item);
}
console.log("");
//For each way
myCats.forEach(cat => console.log(cat));
console.log("");

//But what about objects ?
//for...in
const bigObject = {
    propOne: 1,
    propTwo: 2,
    propThree: 3,
    methodOne: function () {
        return "methodOne";
    },
}
for (const cont in bigObject) {
    console.log(cont);
}

/*Map method: take an existing array does something with each of the items in the array
  and then returns each of those items into a new array
*/
const section = document.createElement("section");
const ul = document.createElement("ul");

const liArray = myCats.map((cat) => {
    let li = document.createElement("li");
    li.innerHTML = cat;
    return li
});

liArray.forEach((liCat) => {
    ul.append(liCat);
});

section.append(ul);
document.body.append(section);