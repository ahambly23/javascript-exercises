const repeatString = function(string, num) {

    if (num < 0) {
        return "ERROR";
    }

    let loopString = '';

    for (let x = 0; x < num; x++) {
        loopString = loopString + string;
    }

    return loopString;
};

// Do not edit below this line
module.exports = repeatString;
