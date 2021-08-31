//Easy way

//Create nav element
const navElem = document.createElement("nav")

//Write nav bar
const content = `
    <ul>
        <li><a href="#">Home Page</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
`;

//Add the unordered list to nav element
navElem.innerHTML = content

//Add nav bar to html
document.body.appendChild(navElem)

//Hard way

//Create nav element
const navElemHard = document.createElement("nav")

//Create ul elem
const ulElem = document.createElement("ul")

//Create 3 li
const liA = document.createElement("li")
const liB = document.createElement("li")
const liC = document.createElement("li")

//Create 3 a
const aA = document.createElement("a")
const aB = document.createElement("a")
const aC = document.createElement("a")

//Set href attr to #
aA.setAttribute("href", "#")
aB.setAttribute("href", "#")
aC.setAttribute("href", "#")

//Set innerHTML
aA.innerHTML = "Home Page"
aB.innerHTML = "About"
aC.innerHTML = "Contact"

//Insert a's on li's
liA.appendChild(aA)
liB.appendChild(aB)
liC.appendChild(aC)

//Append li's to ul
ulElem.append(liA, liB, liC)

//Append ul to nav
navElemHard.appendChild(ulElem)

//Append nav to html
document.body.appendChild(navElemHard)