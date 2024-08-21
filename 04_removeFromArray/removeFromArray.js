const removeFromArray = function(arr, ...remove) {

    // Put the remove arguments into a seperate Array
    let removeArr = remove;

    // Loop through the arr argument
    for (let x = 0; x < arr.length; x++) {

        // Then loop through the array of remove arguments
        for (let y = 0; y < removeArr.length; y++) {

            // If a value from arr matches (in value and type) a value from the array of removes, remove it.
            if (arr[x] === removeArr[y]) {
                arr.splice(x, 1);

                // Decrement x as there will be one less value in arr
                x--;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
