/* eslint no-underscore-dangle: 0 */

export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code != 'string') {
      throw TypeError('Name or Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
