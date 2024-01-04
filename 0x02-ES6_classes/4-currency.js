import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get _amount() {
    return this._amount;
  }

  set _amount(x) {
    this._amount = x;
  }

  get _currency() {
    return this._currency;
  }

  set _currency(x) {
    this._currency = x;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} ${this._currency._code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
