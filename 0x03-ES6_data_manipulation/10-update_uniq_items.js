export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  const mapCopy = map;
  for (const [key, value] of map.entries()) {
    if (value === 1) mapCopy.set(key, 100);
  }
  return mapCopy;
}
