import Human from "./Human.js";

const human = new Human(
		"Geralt",
		400,
		90,
		1.90,
		"Witcher"
	);

console.log("Human name is:", human.name);
console.log("Human height is:", human.biotype.height);
console.log("Human occupation is:", human.occupation);

human.changeName("Geralt of Rivia");
human.changeBiotype(100, 2);
human.changeOccupation("The Witcher");

console.log("Human name is:", human.name);
console.log("Human height is:", human.biotype.height);
console.log("Human occupation is:", human.occupation);