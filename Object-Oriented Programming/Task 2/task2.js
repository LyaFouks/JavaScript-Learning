"use strict";

class Car {
	constructor(model, speed) {
		this.model = model;
		this.speed = speed;
	}

	accelerate() {
		this.speed += 5;
		console.log(this.speed);
	}

	break() {
		this.speed -= 5;
		console.log(this.speed);
	}

	get speedAtMph() {
		return this.speed / 1.6;
	}

	set setSpeedAtMph(speed) {
		return (this.speed = speed * 1.6);
	}
}

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

console.log(honda.speedAtMph);
honda.setSpeedAtMph = 20;
console.log(honda.speed);
