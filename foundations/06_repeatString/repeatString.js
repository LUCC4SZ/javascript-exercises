const repeatString = function(str, max) {
    if (max < 0) return "ERROR";
    let repeatedString = "";
    for (let i = 1; i <= max; i++) {
        repeatedString = repeatedString.concat(str);
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
