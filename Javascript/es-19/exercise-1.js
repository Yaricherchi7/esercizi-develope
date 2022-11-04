const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

 person2.firstName = "simon";

// perchè person2 è una variabile collegata a person1, l'oggetto rimane lo stesso di conseguenza
// modificandone uno si modifica anche l'altro

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
