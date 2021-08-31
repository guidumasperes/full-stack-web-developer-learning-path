//Creating elements and adding to html

//First create with createElement()
const par = document.createElement("p")
par.style.color = "red"
par.innerHTML = "I'm a new paragraph"

//Now add to html with append()
document.body.append(par)