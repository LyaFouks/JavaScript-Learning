// Declaration


const myAge1 = getAge1(1991, 2023);
console.log(myAge1);

function getAge1(birthYear, yearNow) {
   // const age = yearNow - birthYear;
   return yearNow - birthYear;
}

// const myAge1 = getAge1(1991, 2023);
// console.log(myAge1);


// Expresion

const getAge2 = function(birthYear, yearNow) {
      return yearNow - birthYear;
}

const myAge2 = getAge2(1991, 2023);
console.log(myAge2);

