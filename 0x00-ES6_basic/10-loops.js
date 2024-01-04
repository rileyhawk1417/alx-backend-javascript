/* eslint-disable no-undef */
export default function appendToEachArrayValue(array, appendString) {
  const tmp = [];
  for (const value of array) {
    tmp.append(appendString + value);
  }

  return tmp;
}
