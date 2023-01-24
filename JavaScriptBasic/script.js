// Arrow Functions

const getAge3 = (birthYear, yearNow) => 
    yearNow - birthYear;

const myAge3 = getAge3(1991, 2023);
console.log(myAge3);



const canBuySomeInteresting = (birthYear, yearNow) => {
   const age =  yearNow - birthYear;
   const isPerspnalOlderThan21 = 
   age >=21 ? 
   true : false;
   return isPerspnalOlderThan21;

}

console.log(canBuySomeInteresting(1991, 2023));

