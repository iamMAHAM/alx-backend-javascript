function cleanSet(set, startString) {
  let clean = '';
  for (const item of set) {
    if (startString) {
      if (item.startsWith(startString)) {
        clean += `${item.replace(startString, '').trim()}-`;
      }
    }
  }

  return clean.slice(0, clean.length - 1);
}

export default cleanSet;
