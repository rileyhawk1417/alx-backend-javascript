export default function appendToEachArrayValue(array, appendString) {
  let tmpArray = [];
  for (const idx of array) {
    let value = array[idx];
    tmpArray.append(appendString + value);
  }

  return tmpArray;
}
