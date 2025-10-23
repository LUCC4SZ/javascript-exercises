const removeFromArray = function(arr, a, b) {
    if (arr.includes(a) && arr.includes(b)) {
        const indexA = arr.indexOf(a);
        const indexB = arr.indexOf(b);
        return arr.slice(0, indexA).concat(arr.slice(indexA + 1, indexB)).concat(arr.slice(indexB + 1));
    }
};

// Do not edit below this line
module.exports = removeFromArray;
