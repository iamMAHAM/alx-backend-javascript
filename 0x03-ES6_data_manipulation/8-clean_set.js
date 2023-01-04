function cleanSet(set, startString) {
  if (
    !startString
    || typeof startString !== 'string'
    || !(set instanceof Set)
  ) return '';

  const cleaned = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      cleaned.push(item.replace(startString, ''));
    }
  }

  return cleaned.join('-');
}

export default cleanSet;
