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
// steven.__proto__ --> Person.prototype

steven.init('steven', 2001);
steven.calcAge();

//========================================

const StudentProto = Object.create(PersonProto);
// StudentProto.__proto__ --> PersonProto.prototype

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Hi I am ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
// jay.__proto__ --> StudentProto.prototype --> Person.prototype

jay.init('jay', 1994, 'biology');
jay.introduce();
jay.calcAge();
