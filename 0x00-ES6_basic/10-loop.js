export default function appendToEachArrayValue(array, appendString) {
  const inter = [];
  for (const idx of array) {
    inter.push(appendString + idx);
  }

  return inter;
}
