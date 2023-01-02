function getStudentsByLocation(studentList, city) {
  return studentList.filter((s) => s.city === city);
}
export default getStudentsByLocation;
