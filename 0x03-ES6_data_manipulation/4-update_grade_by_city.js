function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((s) => s.location === city)
    .map((fs) => {
      const hasGrade = newGrades.find((g) => g.studentId === fs.id);
      const grade = hasGrade ? hasGrade.grade : 'N/A';
      return {
        ...fs,
        grade,
      };
    });
}

export default updateStudentGradeByCity;
