import getListStudentIds from './1-get_list_student_ids';

function getStudentIdsSum(studentList) {
  const ids = getListStudentIds(studentList);

  return ids.reduce((accum, current) => accum + current, 0);
}

export default getStudentIdsSum;
