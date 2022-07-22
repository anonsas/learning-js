// 1. Public fields.
// 2. Private fields.
// 3. Public methods.
// 4. Private methods.

class Account {
  // 1. Public fields
  locale = navigator.language;

  // 2. Private fields
  #pin;
  #movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // this.locale = navigator.language;
    // this._movements = [];

    console.log('Thank you, for opening an Account!');
  }

  // 3. Public (methods) Interface - API
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  // 4. Private methods (Don't work yet)
  // #approveLoan(val) {
  _approveLoan(val) {
    if (val > 0) return true;
  }
}

const igor = new Account('Igor', 'EUR', 1111);

igor.deposit(200).deposit(400).withdraw(150).requestLoan(25000);
console.log(igor.getMovements());
