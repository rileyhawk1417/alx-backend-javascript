export default function appendToEachArrayValue(array, appendString) {
  const tmp = [];
  for (const value of array) {
    tmp.append(appendString + value); // eslint-disable-line no-param-reassign
  }

  return tmp;
}
