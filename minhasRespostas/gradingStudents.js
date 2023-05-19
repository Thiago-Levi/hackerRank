function gradingStudents(grades) {
  let finalGrades = [];

  finalGrades = grades.map((grade) => {
    const sum1IsMultpOfFive = (grade + 1) % 5 === 0;
    const sum2IsMultpOfFive = (grade + 2) % 5 === 0;
    const isMinusOf38 = grade < 38;

    if (isMinusOf38) {
      return grade;
    } else if (sum1IsMultpOfFive) {
      return grade + 1;
    } else if (sum2IsMultpOfFive) {
      return grade + 2;
    } else {
      return grade;
    }
  });
  return finalGrades;
}

const grades = [67, 38, 33];

console.log(gradingStudents(grades));
