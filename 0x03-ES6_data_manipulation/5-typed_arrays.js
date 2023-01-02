function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const intView = new Int8Array(buffer);
  intView.set([value], position);
  return new DataView(buffer);
}

export default createInt8TypedArray;
