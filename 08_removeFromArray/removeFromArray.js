const removeFromArray = function(arr, a, b) {
    let newArr = [];
    if (arr.includes(a) && arr.includes(b)) {
        const indexA = arr.indexOf(a);
        const indexB = arr.indexOf(b);
        if (indexA > indexB) {
            newArr = arr.slice(0, indexB).concat(arr.slice(indexB + 1, indexA).concat(arr.slice(indexA + 1)));
        } else {
            newArr = arr.slice(0, indexA).concat(arr.slice(indexA + 1, indexB).concat(arr.slice(indexB + 1)));
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
