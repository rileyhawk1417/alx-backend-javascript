export default function getStudentsIdsSum(array) {
  return array.reduce((left, right) => left + right.id, 0);
}
