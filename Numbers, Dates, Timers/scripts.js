"use strict";

// CONVERTING AND CHECKING NUMBERS

console.log(10 === 10.0);

// 10 - 0-9; 1 / 10 = 0.1; 10 / 3 = 3.333333333333
// 2 - 0, 1

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Converting String to Numbers
console.log(Number("11"));
console.log(+"11");

// Parsing Numbers from String
console.log(Number.parseInt("20%", 10));
console.log(Number.parseInt("011110%", 2));
console.log(Number.parseInt("s20%", 10));

console.log(Number.parseFloat("9.7kg"));
console.log(Number.parseInt("9.7kg"));

// Other Methods from Number Namespace
console.log(Number.isNaN(111));
console.log(Number.isNaN("111"));
console.log(Number.isNaN(+"20%"));
console.log(11 / 0);
console.log(Number.isNaN(11 / 0));

console.log("************************************");

// Check if the Value is Finite Number
console.log(Number.isFinite(111));
console.log(Number.isFinite("111"));
console.log(Number.isFinite("111%"));
console.log(Number.isFinite(11 / 0));
