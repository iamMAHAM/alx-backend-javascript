/* eslint no-underscore-dangle: 0 */

export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
  }

  static evacuationWarningMessage() {
    throw new TypeError(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}
