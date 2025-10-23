const removeFromArray = function(arr, a, b) {
    if (!arr.includes(a) && arr.includes(b)) {
        const index = arr.indexOf(b);
        return arr.slice(0, index).concat(arr.slice(index + 1));
    }
};

// Do not edit below this line
module.exports = removeFromArray;
