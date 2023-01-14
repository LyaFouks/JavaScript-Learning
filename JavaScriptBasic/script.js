// Conversion to string

// String()

let x = String(1112);
x = String(2+2);
x = String(false);
x = String(new Date());
x = String(['one', 'two', 'three']);

// toString()

x = (35).toString();
x = (true).toString();


console.log(x);
console.log(typeof x);
console.log(x.length);


// Conversion to number

//Number()

let y = Number('5.123147613515');
y = Number(false);
y = Number(null);
y = Number('text');
y = Number([1, 2, 3]);


// parseInt()

y = parseInt('123.23');
y = parseFloat('123.23');


console.log(y);
console.log(typeof y);
console.log(y.toPrecision(4));


const a = "5";
const b = "3";
const c = a + b;

console.log(z);
console.log(typeof z);

const d = "5";
const s = "3";
const e = d - s;

console.log(e);
console.log(typeof e);

const q = "5";
const w = "3";
const r = q * w;

console.log(r);
console.log(typeof r);



