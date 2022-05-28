/*  
    1. Create a list of pet owners (name, email, phone number, list of pets (pet type, pet name, pet age)) and functions that:  
*/

const petsOwners = [
  {
    name: "Andrei Mihaila",
    email: "andrei.mihaila@yahoo.com",
    phoneNumber: "0741 222 333",
    pet: {
      petType: "dog",
      petName: "Bobby",
      petAge: 3,
    },
  },
  {
    name: "Mihai Iacob",
    email: "mihai.iacob@gmail.com",
    phoneNumber: "0741 113 233",
    pet: {
      petType: "cat",
      petName: "Sara",
      petAge: 5,
    },
  },
  {
    name: "Matei Luca",
    email: "matei.luca@yahoo.com",
    phoneNumber: "0751 534 185",
    pet: {
      petType: "dog",
      petName: "Hulk",
      petAge: 4,
    },
  },
  {
    name: "Cristina Stefanescu",
    phoneNumber: "0751 534 123",
    pet: {
      petType: "cat",
      petName: "Sena",
      petAge: 3,
    },
  },
];

// returns the list of pet owners (name, email, phone number) who have pets of a certain type
const getOwnerInfoByPetType = (petType) => {
  petsOwners.filter((owner) => owner.pet.petType === petType);
};

//  returns the average age of all pets owned by pet owners in the list

let avgAge =
  petsOwners.reduce(
    (prevValue, currentValue) => currentValue.pet.petAge + prevValue,
    0
  ) / petsOwners.length;
console.log(avgAge);

// returns the number of pet owners who have not provided their email

const getOwnerWithoutEmail = petsOwners.filter(
  (owner, prev) => owner.email == undefined
);
console.log(getOwnerWithoutEmail);

// prints the pet type that shows up most often in the pet owners list

const arrayOfPetsType = petsOwners.map((pets) => pets.pet.petType); //array of pets type
console.log(arrayOfPetsType);

const countOccurrences = arrayOfPetsType.reduce(
  (prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
  {}
);
console.log(countOccurrences);

// checks if every pet owner in the array has at least one pet of a certain type

const petOwnerPetType = petsOwners.map(
  (owner) => owner.pet.petType != undefined
);

console.log(petOwnerPetType);
