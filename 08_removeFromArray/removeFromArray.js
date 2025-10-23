const removeFromArray = function(arr, a, b, c, d) {
    const arrTwo = [a, b, c, d];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === arrTwo[i]) {
            arr = arr.slice(i, 0);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
