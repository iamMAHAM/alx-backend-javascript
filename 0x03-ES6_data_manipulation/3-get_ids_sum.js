function getStudentIdsSum(studentList) {
  return studentList.reduce((accum, current) => accum + current);
}

export default getStudentIdsSum;
