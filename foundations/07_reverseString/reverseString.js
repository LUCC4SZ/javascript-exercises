const reverseString = function(str) {
    let rvstr = "";
    const arrStr = str.split("");
    for (let i = arrStr.length - 1; i >= 0; i--) {
        rvstr += arrStr[i];
    }
    return rvstr;
};

// Do not edit below this line
module.exports = reverseString;
