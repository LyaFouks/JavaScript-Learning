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

const ELectricCar = function (name, speed, battery) {
	Car.call(this, name, speed);
	this.battery = battery;
};

ELectricCar.prototype = Object.create(Car.prototype);

ELectricCar.prototype.chargeBattery = function (chargeLevel) {
	this.battery = chargeLevel;
};

ELectricCar.prototype.accelerate = function () {
	this.speed += 10;
	this.battery -= 1;
	console.log(
		`${this.name} is moving with a ${this.speed} km/h speed, with a battery level ${this.battery}%`
	);
};

const tesla = new ELectricCar("Tesla", 100, 33);
console.log(tesla);
tesla.chargeBattery(80);
console.log(tesla);

tesla.break();
tesla.break();
tesla.break();

tesla.accelerate();
tesla.accelerate();

const bmw = new Car("BMW", 150);

bmw.break();
bmw.break();
bmw.break();

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
