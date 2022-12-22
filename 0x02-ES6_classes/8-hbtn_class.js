/* eslint no-underscore-dangle: 0 */

export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') {
      throw TypeError('size must be number or location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  
}
