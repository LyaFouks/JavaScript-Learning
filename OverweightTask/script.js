const weight = prompt('Enter your weight in kilograms');
const height = prompt('Enter your height in meters');

const bodyMassIndex = weight / Math.pow(height, 2);



if(bodyMassIndex >= 25){
    alert('You are overweight!')
    console.log('You are overweight!')
} else {
    alert('No, you have normal weight!')
    console.log('No, you have normal weight!')
}

