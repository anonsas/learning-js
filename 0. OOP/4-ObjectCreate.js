'use strict';

// No prototype properties involved, no Constructor functions,
// and no new operator. Object.create() - manually set the object's
// prototype to any other object that we want.

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 1987;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2001);
sarah.calcAge();
