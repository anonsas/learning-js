'use strict';

// Constructor functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.species = 'Homo Sapiens';
Person.prototype.calcAge = function () {
  return 2022 - this.birthYear;
};

const jack = new Person('Jack', 2004);
const matilda = new Person('Matilda', 1975);

console.log(matilda instanceof Person);
console.log(matilda.hasOwnProperty('birthYear'));
console.log(matilda.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(matilda));

console.log(jack.calcAge());
console.log(matilda.calcAge());

// Static method - not inherited. Useful when the method
// doesn't logically belong to any individual instance.
// Like Array.from(), Object.keys()...
Person.hey = function () {
  console.log('Hey there 👋');
};

console.dir(Person);

//===============================================================
// new keyword:
// 1. Creates an empty object {}
// 2. this keyword in Constructor function is set to the new object {}
// 3. New object {} is linked to Constructor function prototype.
// 4. New object {} is returned from Constructor function.
