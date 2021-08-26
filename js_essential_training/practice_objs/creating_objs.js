//Bed
const bed = {
	typeOf: "double bed",
	numberOfPillows: 2,
	removePillows: function () {
		this.numberOfPillows--;
	},
	addPillows: function () {
		this.numberOfPillows++;
	},
};

//Stove
const stove = {
	typeOf: "electric",
	numberOfBurners: 4,
	hasOven: true,
	hasLight: true,
	color: "white",
};
console.log("typeOf stove:", stove.typeOf);

//Tennis
const tennis = {
	brand: {
		name: "nike",
		collections: "jordan",
	},
	color: "blue & white",
	hasShoelace: true,
	changeShoelace: function (shoelaceCondition) {
		this.hasShoelace = shoelaceCondition;
	},
};
console.log("Condition of shoelace: ", tennis.hasShoelace);
tennis.changeShoelace(false);
console.log("Condition of shoelace: ", tennis.hasShoelace);