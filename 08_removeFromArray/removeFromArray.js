const removeFromArray = function(arr, item) {
    if (arr.includes(item)) {
        const index = arr.indexOf(item);
        return arr.slice(0, index).concat(arr.slice(index + 1));
    }

};

// Do not edit below this line
module.exports = removeFromArray;
