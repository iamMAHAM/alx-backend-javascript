function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((s) => s.city === city)
    .map((fs) => {
      const hasGrade = newGrades.find((g) => g.studentId === fs.id).grade || 'N/A';
      return {
        ...fs,
        grade: hasGrade,
      };
    });
}

export default updateStudentGradeByCity;
