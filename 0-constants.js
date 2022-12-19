export const taskFirst = () => {
  var task = 'I prefer const when I can.';

  return task;
};

export function getLast() {
  return ' is okay';
}

export const taskNext = () => {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
};
