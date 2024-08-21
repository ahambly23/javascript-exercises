const removeFromArray = function(arr, ...remove) {

    let removeArr = remove;

    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < removeArr.length; y++) {
            if (arr[x] === removeArr[y]) {
                arr.splice(x, 1);
                x--;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
