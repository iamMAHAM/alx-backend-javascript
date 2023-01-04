function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const [k, v] of map.entries()) {
    if (v === 1) {
      // eslint-disable-next-line no-param-reassign
      map.set(k, 100);
    }
  }
}

export default updateUniqueItems;
