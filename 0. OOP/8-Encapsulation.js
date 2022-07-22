// Encapsulation (Data privacy) needed for:
// Prevent code from outside of the Class to manipulate our data inside a Class.
// underscore _property - protected property (for other devs)

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this.locale = navigator.language;

    // protected property
    this._movements = [];

    console.log('Thank you, for opening an Account!');
  }

  // Public (methods) Interface - API
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    if (val > 0) return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const igor = new Account('Igor', 'EUR', 1111);

igor.deposit(200);
igor.withdraw(150);
igor.requestLoan(1000);
igor.requestLoan(-10000);

console.log(igor.getMovements());
