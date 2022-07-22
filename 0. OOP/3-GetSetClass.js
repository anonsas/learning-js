'use strict';

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName; // 1.
    this.birthYear = birthYear;
  }

  // Static Method - available only on the Class itself.
  static hey() {
    console.log('Hey there 👋');
  }

  // Instance Methods -> adds to .prototype property
  get age() {
    const currYear = new Date().getFullYear();
    return currYear - this.birthYear;
  }

  // 2.
  set fullName(name) {
    if (name.includes(' ')) return (this._fullName = name);
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new Person('Jessica Davis', 1994);

console.log(jessica.age);
console.log(jessica.fullName);

Person.hey();

// 1. this.fullName in the constructor will call the setter
// with the same name: set fullName property from setter function.

// 2. For this to work properly, we can't use the same property and
// setter names (that's why we need underscore _, to prevent infinite recursion).
