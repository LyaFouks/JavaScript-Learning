const firstPerson = {
    name: 'Jack',
    lastName: 'White',
    weight: 79,
    height: 1.70,
    bmiCalculation: function() {
        return this.bmiIndex = (this.weight / Math.pow(this.height, 2)).toFixed(2);
    },
}

const secondPerson = {
    name: 'Mike',
    lastName: 'Black',
    weight: 79,
    height: 1.70,
    bmiCalculation: function() {
        return this.bmiIndex = (this.weight / Math.pow(this.height, 2)).toFixed(2);
    },
}

 
    if(firstPerson.bmiCalculation() > secondPerson.bmiCalculation()) {
    console.log(`${firstPerson.name} ${firstPerson.lastName} BMI (${firstPerson.bmiIndex}) is higher than ${secondPerson.name} ${secondPerson.lastName} BMI (${secondPerson.bmiIndex})!`)
    }  else if (firstPerson.bmiCalculation() < secondPerson.bmiCalculation()){
        console.log(`${secondPerson.name} ${secondPerson.lastName} BMI (${secondPerson.bmiIndex}) is higher than ${firstPerson.name} ${firstPerson.lastName} BMI (${firstPerson.bmiIndex})!`)
    } else {
        console.log(`${firstPerson.name} ${firstPerson.lastName} BMI and ${secondPerson.name} ${secondPerson.lastName} BMI are equal (${firstPerson.bmiIndex})!`)
    }
    