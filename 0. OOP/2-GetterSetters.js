'use strict';

//======================================
// Getters and Setters in Object
const john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  calculateAge: function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
  },
};
console.log(john.calculateAge()); //32

// It works, but do we really need to think of age as a calculation?
// I just want to get the age of john; I don't need to know
// that I must run a method to calculate it.
// This is one of the reasons why getters and setters exist.

const john2 = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
  },
};
console.log(john2.age); //32

// The output is the same, but the way we access the age is different.
// I want to get the age of john, so I write john.age. I don't need
// to be aware of the fact that there is some calculation going on.
// Now, imagine you write a library that other programmers can use
// in their projects. You just give them documentation that states
// they can use the age property. They don't need to worry about
// how this was implemented; They just want to get the age, which
// naturally is perceived as property, and not some action that you
// need to perform.
