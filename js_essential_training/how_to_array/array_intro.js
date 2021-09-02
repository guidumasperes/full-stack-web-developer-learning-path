//Arrays
let number = 6;

const arr = ["string", number, 7, true]; //We can mix datatypes in arrays

//Pretty much like any other array in other programming languages
console.log(arr);
console.log(arr.length);
console.log(arr[3]);

//Adding a new item to the array, arrys in js are dynamic
arr[arr.length] = "new item";
console.log(arr);

//you can add items to positions further away from the last position
arr[arr.length + 5] = "last item";
console.log(arr);

//The positions between 4 and 10 become undefined
console.log(arr[arr.length - 2]);

const container = [3, "string", true, 6];

//Output array contents as string:
console.log(container.join()) ;
//You can define a separator
console.log(container.join(" "));

//Add items in the end of the array
container.push(7, "last");
console.log(container);

//In the beginning 
container.unshift("first");
console.log(container);

//Remove first item
container.shift();

//Remove last item
container.pop();

console.log(container);

//We can apply a function to each item in the array(like map in Python)
container.forEach(function (item) {
    let par = document.createElement("p");
    par.innerHTML = item;
    document.body.appendChild(par);
});

//We can find items based on a function
let boolItem = container.find(element => {
    if (typeof element == typeof true) {
        return element;
    }
});
console.log(boolItem);