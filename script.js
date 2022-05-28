"use strict"

const personOne = {
    name: "Andrei",
    age: 11,
    salary:2000
};

const personTwo = {
    name: "Marius",
    age: 27,
    salary:2500
};

const personThree = {
    name: "Nicolae",
    age: 25,
    salary:2000
};

const people = [personOne,personTwo,personThree]; //cream array-ul din obiecte

function checkAge(people){
    if(people.age >= 18)
    {
        return true;
    }
    return false;
}
const checkAge2 = (person) =>{
    return person.age >= 18  ? true : false
}


const checkAge3 = (person) => person.age >= 18 ? true:false;

const checkAge4 = (person) => person.age >= 18;

const filterPeople = people.filter(checkAge);

//console.log(filterPeople);

const filterPeople2 = people.filter(checkAge2);

//console.log(filterPeople2);

const filterPeople3 = people.filter(checkAge3);

//console.log(filterPeople3);


const filterPeopleFinal = people.filter(person => person.age >= 18); //cea mai buna varianta
console.log(filterPeopleFinal);

const fixedSalary = people.filter(person => people.salary === 2000);
console.log(fixedSalary);



const increasedSalary = person => {
    const newSalary = person.salary + 500;
    const person2 = {name:person.name,salary:newSalary }
    return person2;
} 
const updatedSalary = people.map(increasedSalary);
console.log(people, updatedSalary);



const updatedSalary2 = people.map(person => {
    const newSalary = person.salary + 500;
    const person2 = {name:person.name,salary:newSalary}
    return person2;
});
console.log(people, updatedSalary2);

const searchSalary = people.find(person => person.salary === 4000);
console.log(searchSalary);

const searchSalary2 = people.findIndex(person => person.salary === 2500);
console.log(searchSalary2);

const some = people.some(person => person.salary === 2000);
console.log(some);

const every = people.every(person => person.salary === 2000);
console.log(every);

