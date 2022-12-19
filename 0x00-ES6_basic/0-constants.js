export const taskFirst = function () {
  let task = 'I prefer const when I can.';

  return task;
};

export const getLast = function () {
  return ' is okay';
};

export const taskNext = function () {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
};
