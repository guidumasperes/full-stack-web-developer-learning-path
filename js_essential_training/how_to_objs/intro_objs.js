/* The curly brackets often says that this is a js object */

const human = {
	name: "Geralt", // This is a property, its an object feature, a key value pair
	age: 400,
	biotype: { // A property value can be an object as well
		weight: 90,
		height: 1.95,
	},
	occupation: "Witcher",
	changeOccupation: function (occupation) { // An object can have methods, that dictates its behavior
		this.occupation = occupation; // "this" keyword refers to the current object 
	},
}

/* objects are typically constants: we can change the properties of the object inside the container. But, we can't remove or replace
   the object from the container(the variable)
*/

// To variable names use camelCase

console.log("Geralt object: ", human);