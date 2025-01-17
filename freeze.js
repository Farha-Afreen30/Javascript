// Using const 
const name = "Farha";
name = "Afreen"; // Error.

// Using const for an object
const person = { name: "Farha" };
person.name = "Afreen"; // Allowed
console.log(person);

person = { name: "Samantha" }; // Error


const user = {
  name: "Farha",
  address: {
    city: "Chennai",
    pin: 600088,
  },
};

// Modifying nested object
user.address.city = "OMR"; // Allowed
console.log(user.address.city);

//*******************************************

//Using Object.freeze()

/*
const user = {
  name: "Farha",
  address: {
    city: "Chennai",
    pin: 600088,
  },
};
*/

Object.freeze(user);

user.name = "Afreen"; // Cannot modify 
console.log(user.name);

user.role = "Developer"; // Cannot add new properties
delete user.address; // Cannot delete properties
console.log(user);

user.address.city = "Adyar"; // Allowed to modify nested objects
console.log(user.address.city); 

// Deep freezing to prevent modifications to nested objects
function deepFreeze(obj) {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
  return Object.freeze(obj);
}

deepFreeze(user);

user.address.city = "Taramani"; 
console.log(user.address.city);

let new = Object.freeze({ name: "Farha" });

// Reassigning the entire object is allowed if not declared with const
new = { name: "Afreen" };
console.log(new.name);


const new = Object.freeze({ name: "Farha" });
new = { name: "Afreen" }; // Error
