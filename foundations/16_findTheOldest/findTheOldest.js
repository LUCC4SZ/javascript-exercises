const findTheOldest = function(array) {
    let ages = array.map((item) => {
        return {name: item.name, age: item.yearOfDeath - item.yearOfBirth};
    });

    let oldest;
    for (let i = 0; i <= ages.length; i++) {
        initial = ages[0].age;
        oldest = ages.filter((item) => item.age > initial);
        inital = ages[i];
    }
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
