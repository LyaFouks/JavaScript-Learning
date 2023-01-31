'use strict';

const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
const tips = [];
const billsSumTips = [];


function calculateTips(bill)  {
        if(bill <= 20) {
            return bill * 0.2;
        } else {
            return bill * 0.15;
        }
    }

for(let i = 0; i < bills.length; i++) {
   const tip = calculateTips(bills[i]);
   tips.push(tip);
   billsSumTips.push(bills[i] + tip);
}


console.log(tips);
console.log(bills);
console.log(billsSumTips);


const calculateAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

console.log(calculateAverage(billsSumTips));
console.log(calculateAverage(bills));
console.log(calculateAverage(tips));