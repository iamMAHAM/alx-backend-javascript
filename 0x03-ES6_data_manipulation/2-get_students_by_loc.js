function getStudentsByLocation(studentList, city) {
  return studentList.filter((s) => s.location === city);
}
export default getStudentsByLocation;
