"use strict";

const jane1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const julia1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
const jane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
const julia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

const verifyCats = function (catsJane, catsJulia) {
	const catsJaneCopy = catsJane.slice();
	catsJaneCopy.splice(-1);
	catsJaneCopy.splice(0, 1);
	console.log(catsJaneCopy);

	const JaneAndJuliaCats = catsJaneCopy.concat(catsJulia);
	console.log(JaneAndJuliaCats);

	JaneAndJuliaCats.forEach(function (catAge, catNumber) {
		if (catAge >= 2) {
			console.log(`Cat №${catNumber + 1} is adult. She is ${catAge} years old.
            `);
		} else {
			console.log(`Cat №${catNumber + 1} still kitty.
            `);
		}
	});
};

verifyCats(jane1, julia1);
console.log("************************************");
verifyCats(jane2, julia2);
