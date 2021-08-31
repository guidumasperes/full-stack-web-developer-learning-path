/* When you present a web browser with a html document it creates an object model for the 
   document(DOM - Document Object Model) and this DOM describes the hierarchical tree
   structure for that document
*/

/* 
Newer methods:

document.querySelector() -> target elements with css, in fact, in the same way we target in css
document.querySelectorAll() -> return a node list with all elements that match

Older methods:

element.getElementsByClassName() -> return all elements matching the query
element.getElementByID() -> return element with specific id
*/

/*
document.querySelector("h1").className -> grab class name of "h1"
Don't use className in framaworks, it can cause conflicts
document.querySelector("h1").classList -> grab a list of classes of "h1"
|
-> classList has methods to manipulate classes in such element as add(), toggle(), etc...
*/
console.log(document.querySelector("p").classList);

/*
To get attributes:
document.querySelector("h1").attributes -> obtain a list of attributes of "h1"
|
-> hasAttribute("alt"), getAttribute("src"), setAttribute("alt", "a simple drawing")
*/
console.log(document.querySelector("p").hasAttribute("src"));

/*
You can obtain inline styles:
document.querySelector().style -> obtain a list of inline styles
*/
console.log(document.querySelector("p").style);
console.log(document.querySelector("p").style.color);
document.querySelector("p").style.color = "red";
document.querySelector("p").style.backgroundColor = "pink";