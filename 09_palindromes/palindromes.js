const palindromes = function (str) {
    let split = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('');
    let length = str.length;
    // create is variable which is true, this will be returned if the loop doesn't action it
    let isPalin = true;
    // write a for loop x which iterates through the first half of the array
    for (let x = 0; x < (length / 2); x++) {
        // match split[x] to length - 1. if they don't match, return false.
        if (split[x] !== split[split.length - 1 - x]) {
            isPalin = false;
            // break for efficiency
            break;
        }
        }
        return isPalin;
    }

// Do not edit below this line
module.exports = palindromes;
