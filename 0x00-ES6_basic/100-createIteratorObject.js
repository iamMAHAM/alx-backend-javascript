export default function createIteratorObject(report) {
  const inter = [];
  for (const [k, v] of Object.entries(report)) {
    if (v instanceof Array) inter.push(...v);
  }
  return inter;
}
