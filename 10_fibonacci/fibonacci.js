const fibonacci = function(number) {
    // create an array which holds the fibonacci sequence
    let fibonacci = [0, 1];
    if (number >= 0) {
        for (let x = 2; x <= number; x++) {
            fibonacci[x] = fibonacci[x - 2] + fibonacci[x - 1];
        }
    // Loop through the array, adding the two numbers before number
    } else {
        return "OOPS"
    }
    return fibonacci[number];
};

// Do not edit below this line
module.exports = fibonacci;
