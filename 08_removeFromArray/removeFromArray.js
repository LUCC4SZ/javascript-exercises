const removeFromArray = function(arr, a, b) {
    if (arr.includes(a)) {
        const indexA = arr.indexOf(a);
        arr = arr.slice(0, indexA).concat(arr.slice(indexA + 1));
    }
    if (arr.includes(b)) {
        const indexB = arr.indexOf(b);
        arr = arr.slice(0, indexB).concat(arr.slice(indexB + 1));
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
