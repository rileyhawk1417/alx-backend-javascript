/* es-lint-disable */

export default function iterateThroughObject(reportWithIterator) {
  let data = "";
  for (let idx = 0; idx < reportWithIterator.length; i++) {
    const employee = reportWithIterator[idx];
    if (idx === reportWithIterator.length - 1) {
      data += employee;
    } else {
      data += `${employee} | `;
    }
  }
  return data;
}
