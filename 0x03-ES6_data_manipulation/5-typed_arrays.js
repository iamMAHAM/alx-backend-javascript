function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  const int8view = new Uint8Array(arrayBuffer);
  int8view[position] = value;
  return int8view;
}

export default createInt8TypedArray;
