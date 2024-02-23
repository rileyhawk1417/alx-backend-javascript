export default function iterateThroughObject(reportWithIterator) {
  const idx = reportWithIterator.next();
  let res = '';
  while (!idx.done) {
    res += `${idx.value} | `;
    res = reportWithIterator.next();
  }
  return res.slice(0, res.length - 3);
}
