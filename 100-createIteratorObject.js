export default function createIteratorObject(report) {
  return [
    ...Object.values(report).map((emp) => {
      if (emp instanceof Array) {
        return [...emp];
      }
    }),
  ];
}
