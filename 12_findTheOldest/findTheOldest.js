/*const findTheOldest = function(arr) {
    people = arr.map((a)=>{
        a.yearOfDeath = a.yearOfDeath? a.yearOfDeath : (new Date()).getFullYear();
        return a.yearOfDeath - a.yearOfBirth;
    }).sort((a,b)=> (a>b)? -1: 1);
    return people[0];
};*/

const findTheOldest = function(arr) {
    return arr.reduce((max, person)=>{
        person.yearOfDeath = person.yearOfDeath? person.yearOfDeath : (new Date()).getFullYear();
        person.age = person.yearOfDeath - person.yearOfBirth;
        if(max.age < person.age){
            max = person;
        }
        return max;
    },{age: 0});
};

// Do not edit below this line
module.exports = findTheOldest;
