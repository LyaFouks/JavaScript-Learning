'use strict';

const bills = [11, 20, 47];
let tips = Array.from(bills.map(calculateTips));


function calculateTips(bill)  {
        if(bill <= 20) {
            return bill * 0.2;
        } else {
            return bill * 0.15;
        }
    }


const billsSumTips = [];
for(let i = 0; i < bills.length; i++) {
    billsSumTips.push(bills[i] + tips[i]);
}


console.log(tips);
console.log(bills);
console.log(billsSumTips);


