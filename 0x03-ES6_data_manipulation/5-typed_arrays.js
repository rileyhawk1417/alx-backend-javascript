export default function createInt8TypedArray(length, position, value) {
  const arrayLength = length - 1;
  const arrayBuffer = new ArrayBuffer(length);
  const view = new Int8Array(arrayBuffer);

  if (position > arrayLength) {
    throw Error('Position outside range');
  }

  view[position] = value;
  const data = new DataView(arrayBuffer);
  return data;
}
