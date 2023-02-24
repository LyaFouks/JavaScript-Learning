"use stcict";

const cats = [
	{ catWeight: 3, foodWeight: 25, owners: ["Наташа"] },
	{ catWeight: 6, foodWeight: 90, owners: ["Марина", "Алиса"] },
	{ catWeight: 4, foodWeight: 45, owners: ["Алекс", "Ирина"] },
	{ catWeight: 7, foodWeight: 80, owners: ["Борис"] },
];

// Zhenya and Yulia are still studying cats, and this time they are studying whether cats eat too much or too little.
// Too much food means that the cat's current portion of food is more than recommended, and too little food - the opposite.
// A normal amount of food means that the cat's current serving of food is between 10% above and 10% below the recommended serving.
// (recommended * 0.9 < normal < recommended * 1.1)

// 1. Iterate over the elements of the cats array, which are objects, and for each cat, calculate the recommended portion of food and add it to the object as a new property. Don't create a new array, just iterate over the array!
// The formula for calculating the recommended portion:
// recommended serving = cat's weight * 0.75 * 12 (result in grams, and cat's weight in kilograms).

cats.forEach(function (cat) {
	cat.recomendedPortionOfFood = cat.catWeight * 0.75 * 12;
});
console.log(cats);

// 2. Find a cat whose owner's name is Alex and print to the console whether this cat eats too much or too little. Hint: Some cats have multiple owners, so you first need to find Alex in the owners array.

const AlexsCat = cats.find((cat) => cat.owners.includes("Алекс"));
console.log(AlexsCat);

const howMuchCatEat = function (cat) {
	const foodAboveNormal = cat.recomendedPortionOfFood * 1.1;
	const foodBelowNormal = cat.recomendedPortionOfFood * 0.9;
	if (cat.foodWeight > foodAboveNormal) {
		console.log(`The cat is eating too much`);
	} else if (cat.foodWeight < foodBelowNormal) {
		console.log(`The cat is eating too little`);
	} else {
		console.log(`The cat is eating well`);
	}
};

howMuchCatEat(AlexsCat);

// 3. Create an array containing all cat owners who eat too much (catsEatTooMuchOwners) and an array with all cat owners who eat too little (catsEatTooLittleOwners).

// Aproach 1
const catsEatTooMuchOwners = [];
const catsEatTooLittleOwners = [];

cats.forEach(function (cat) {
	if (cat.foodWeight > cat.recomendedPortionOfFood * 1.1) {
		catsEatTooMuchOwners.push(...cat.owners);
	} else if (cat.foodWeight < cat.recomendedPortionOfFood * 0.9) {
		catsEatTooLittleOwners.push(...cat.owners);
	}
});

console.log(catsEatTooMuchOwners);
console.log(catsEatTooLittleOwners);

// Aproach 2

const catsEatTooMuchOwners1 = cats
	.filter((cat) => cat.foodWeight > cat.recomendedPortionOfFood * 1.1)
	.flatMap((cat) => cat.owners);
const catsEatTooLittleOwners1 = cats
	.filter((cat) => cat.foodWeight < cat.recomendedPortionOfFood * 0.9)
	.flatMap((cat) => cat.owners);

console.log(catsEatTooMuchOwners1);
console.log(catsEatTooLittleOwners1);

// 4. Output to the console a line for each of the arrays created in step 3:
// "Marina, Alice, Boris are owners of cats who eat too much!" and "Natasha, Irina, Alex are cat owners who eat too little!"

console.log(
	`${catsEatTooMuchOwners.join(", ")}  are owners of cats who eat too much! `
);
console.log(
	`${catsEatTooLittleOwners.join(", ")} are cat owners who eat too little!`
);

// 5. Print to the console whether at least one cat eats exactly the recommended amount of food (just true or false).

console.log(cats.some((cat) => cat.foodWeight === cat.recomendedPortionOfFood));

// 6. Print to the console whether at least one cat eats a normal amount of food (just true or false).

const isdFoodWeightNormal = (cat) =>
	cat.foodWeight < cat.recomendedPortionOfFood * 1.1 &&
	cat.foodWeight > cat.recomendedPortionOfFood * 0.9;

console.log(cats.some(isdFoodWeightNormal));

// 7. Create an array containing cats that eat a normal amount of food (try reusing the condition used in step 6).

console.log(cats.filter(isdFoodWeightNormal));

// 8. Shallow a copy of the cats array and sort by the recommended portion of food property in ascending order (keep in mind that the portions are inside the array objects).

const catsCopy = cats.slice();
catsCopy.sort((x, y) => x.recomendedPortionOfFood - y.recomendedPortionOfFood);
console.log(catsCopy);
