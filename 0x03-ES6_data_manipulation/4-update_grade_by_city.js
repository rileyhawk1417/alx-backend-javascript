export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((item) => item.location === city)
    .map((student) => {
      const grades = newGrades.filter(
        (grade) => grade.studentId === student.id,
      );
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...student,
        grade,
      };
    });
}
