/* eslint no-underscore-dangle: 0 */
import Currency from './3-currency';

export default class Current {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw TypeError('currency must be an instance of currency Class');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError('Currency must be an instance of Currency class');
    }
    this._currency = currency;
  }

  displayFullCurrency() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
}