'use strict';

const getAverage = (month1, month2, month3) => (month1 + month2 + month3) / 3;

// The first quarter

const dept1AvergeSales1 = getAverage(35467, 69842, 38501);

const dept2AvergeSales1 = getAverage(70533, 50121, 33899);

// The second quarter

const dept1AvergeSales2 = getAverage(50301, 21984, 19207);

const dept2AvergeSales2 = getAverage(72381, 41562, 29465);



function printBonus(dept1AvergeSales, dept2AvergeSales) {
    if(dept1AvergeSales > dept2AvergeSales) {
        const difference = dept1AvergeSales - dept2AvergeSales;
        const percent = Math.round(difference / dept2AvergeSales * 100);
        const avarageOfSale = (percent >= 30) ?
        `Dept 1 will get a bonus of ${percent}%.` :
        `No bonus in this quarter. Dept 1 made more sales by ${percent}%.`
        return avarageOfSale;
    } else if(dept2AvergeSales > dept1AvergeSales) {
        const difference = dept2AvergeSales - dept1AvergeSales;
        const percent = Math.round(difference / dept2AvergeSales * 100);
        const avarageOfSale = (percent >= 30) ?
        `Dept 2 will get a bonus of ${percent}%.` :
        `No bonus in this quarter. Dept 2 made more sales by ${percent}%.`
        return avarageOfSale;

    } else {
        const noWinner = 'Both of departments were great this qaurter!';
        return noWinner;
    }

    }

    console.log(printBonus(dept1AvergeSales1, dept2AvergeSales1));