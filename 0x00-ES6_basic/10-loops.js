export default function appendToEachArrayValue(array, appendString) {
  const tmpArray = [];
  for (const idx of array) {
    tmpArray.append(appendString + idx);
  }

  return tmpArray;
}
