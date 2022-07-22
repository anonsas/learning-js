const Car = function (make, currSpeed) {
  this.make = make;
  this.currSpeed = currSpeed;
};

Car.prototype.accelerate = function () {
  this.currSpeed -= 10;
  console.log(`${this.make} accelerates to ${this.currSpeed}km/h`);
  return this;
};

Car.prototype.brake = function () {
  this.currSpeed -= 5;
  console.log(`${this.make} brakes to ${this.currSpeed}km/h`);
  return this;
};

//================================

const EV = function (make, currSpeed, charge) {
  Car.call(this, make, currSpeed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  return this;
};

// Polymorphism - overriding parent method.
EV.prototype.accelerate = function () {
  this.currSpeed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.currSpeed}km/h, with charge of ${this.charge}%`
  );
  return this;
};

const tesla = new EV('tesla', 120, 23);

tesla.accelerate().accelerate().brake().chargeBattery(50).accelerate();

console.log(tesla.__proto__.__proto__ === Car.prototype);

// The bind, call and apply methods always takes the value of 'this'
// keyword as the first argument. The value that we pass here will be
// the value of 'this' inside of the function that we call.
// In this case, Car.call(this, make, currSpeed);
// We're calling the Car function (constructor), and tell it that
// we want the 'this' keyword inside of it to be the value of the
// current 'this' (the argument that we pass). The current value of
// 'this' is the newly created EV object (because we're
// calling it from the inside of the EV constructor).
// You could imagine it as Car.call(<new EV object>, make, currSpeed);
// Then, inside of the Car constructor all occurrences of the
// 'this' keyword will be replaced with the <new EV object>.

// function Car(firstName, make, currSpeed) {
//   <new EV object>.make = make;
//   <new EV object>.currSpeed = currSpeed;
// }
