// Create empty variable
// Loop through the array, adding each number from the array to the variable.

const sumAll = function(num1, num2) {

    let sum = 0;

    // Return Error if not part of the criteria

    if (num1 < 0 || typeof num1 !== 'number' || Number.isInteger(num1) == false) {
        return 'ERROR';

    } else if (num2 < 0 || typeof num2 !== 'number' || Number.isInteger(num1) == false) {
        return 'ERROR';

    // If num1 is smaller than num2

    } else if (num1 < num2) {

        for (let x = num1; x <= num2; x++) {
            sum += x;
        }

    // If num1 is larger than num2

    } else if (num1 > num2) {

        for (let x = num1; x >= num2; x--) {
            sum += x;
        }
    }  
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
