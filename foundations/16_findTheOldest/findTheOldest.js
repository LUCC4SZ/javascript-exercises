const findTheOldest = function(array) {

    array.forEach(element => {
        if (!element.yearOfDeath) {
            const currentYear = new Date(2026);
            element.yearOfDeath = currentYear;
        }
    });

    const ages = array.map((item) => {
        return {name: item.name, age: item.yearOfDeath - item.yearOfBirth};
    });

    let oldest;

    for (let i = 0; i <= ages.length; i++) {
        initial = ages[0].age;
        oldest = ages.filter((item) => item.age > initial);
        inital = ages[i];
    };

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
