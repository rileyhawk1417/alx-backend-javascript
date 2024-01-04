/* eslint-disable no-undef */
export default function appendToEachArrayValue(array, appendString) {
  const tmp = [];
  for (const value of array) {
    tmpArray.append(appendString + value);
  }

  return tmp;
}
