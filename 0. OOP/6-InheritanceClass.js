class Car {
  constructor(make, currSpeed) {
    this.make = make;
    this.currSpeed = currSpeed;
  }

  accelerate() {
    this.currSpeed += 10;
    console.log(`${this.make} accelerates to ${this.currSpeed}km/h`);
    return this;
  }

  brake() {
    this.currSpeed -= 5;
    console.log(`${this.make} brake to ${this.currSpeed}km/h`);
    return this;
  }
}

class EV extends Car {
  #charge;
  constructor(make, currSpeed, charge) {
    super(make, currSpeed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery is charged to ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.currSpeed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going ${this.currSpeed}km/h with ${this.#charge}% charge`
    );
    return this;
  }
}

const tesla = new EV('tesla', 140, 23);
tesla.accelerate().accelerate().brake().chargeBattery(50).accelerate();
