/* 
Two ways of creating classes

Class declaration: class Name {}
Class expression: const Name = class {}
*/

/* Alternatively you can create objects with object constructor function: function className (Same as class)
But, this is not recommended and it's used only in old codes.
*/

class Human { //The class name must start with capital letter
	constructor (
		//Defines parameters
		name,
		age,
		weight,
		height,
		occupation
	) {
		//Defines properties
		this.name = name;
		this.age = age;
		this.biotype = {
			weight: weight,
			height: height,
		};
		this.occupation = occupation;
	};
	// Add methods
	changeName(newName) {
		this.name = newName;
	}
	changeAge(newAge) {
		this.age = newAge;
	}
	changeBiotype(newWeight, newHeight) {
		this.biotype.weight = newWeight;
		this.biotype.height = newHeight;
	}
	changeOccupation(newOccupation) {
		this.occupation = newOccupation;
	}
}

export default Human; //Export class