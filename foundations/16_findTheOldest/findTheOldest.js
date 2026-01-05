const findTheOldest = function(array) {
    array.forEach(element => {
        if (!element.yearOfDeath) {
            const currentYear = new Date(2026);
            element.yearOfDeath = currentYear.getFullYear();
        }
    });

    return array.reduce((itemOne, itemTwo) => {
        let ageOne = itemOne.yearOfDeath - itemOne.yearOfBirth;
        let ageTwo = itemTwo.yearOfDeath - itemTwo.yearOfBirth;
        if (ageOne > ageTwo) {
            return itemOne;
        } else {
            return itemTwo;
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
