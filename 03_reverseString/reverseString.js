const reverseString = function(string) {

    let reverse = '';

    for (let x = string.length - 1; x >= 0; x--) {
        reverse += string[x];
    }

    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
