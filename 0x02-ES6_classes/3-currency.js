/* eslint no-underscore-dangle: 0 */
export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') {
      throw TypeError('Name or Code must be a string');
    }
    this._name = name;
    this.code = code;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._code = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
