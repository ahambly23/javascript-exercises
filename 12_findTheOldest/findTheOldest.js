const findTheOldest = function(object) {

    const ages = object.map(person => {
        const currentYear = new Date().getFullYear();
        const age = person.yearOfDeath ? (person.yearOfDeath - person.yearOfBirth) : (currentYear - person.yearOfBirth);
        return age;
    })

    const maxAge = Math.max(...ages);

    const oldestPerson = object.find(person => {
        const currentYear = new Date().getFullYear();
        const age = person.yearOfDeath ? (person.yearOfDeath - person.yearOfBirth) : (currentYear - person.yearOfBirth);
        return age === maxAge
    })
    
    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
