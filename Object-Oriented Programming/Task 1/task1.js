"use strict";

const Car = function (name, speed) {
	this.name = name;
	this.speed = speed;
};

Car.prototype.accelerate = function () {
	this.speed += 5;
	console.log(this.speed);
};

Car.prototype.break = function () {
	this.speed -= 5;
	console.log(this.speed);
};

const honda = new Car("Honda", 120);
const bmw = new Car("BMW", 150);

console.log(honda);
console.log(bmw);

honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.break();
honda.break();
bmw.break();
bmw.break();
bmw.break();
