const palindromes = function (word) {

    const punctuation = ["!", ",", ".", "?"];

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j <= punctuation.length; j++) {
            if (word[i] === punctuation[j]) {
                word = word.slice(0, i).concat(word.slice(i + 1,));
            }
        }
    }

    word = word.toLowerCase();

    word = word.replaceAll(" ", "");

    let pal = "";

    const arr = [];

    for (let i = 0; i < word.length; i++) {
        arr[i] = word[i];
    };

    const reversed = arr.toReversed();
    for (let i = 0; i < reversed.length; i++) {
        pal+= reversed[i];
    };

    return word === pal;
};

// Do not edit below this line
module.exports = palindromes;
