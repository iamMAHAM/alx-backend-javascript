/* eslint no-underscore-dangle: 0 */

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') {
      throw TypeError('Floors must be a number');
    }
    super(sqft);
    this._sqft = sqft;
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  static evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
