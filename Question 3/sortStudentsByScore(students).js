function sortStudentsByScore(students) {
    return students.slice().sort((a, b) => b.score - a.score);
  }
//   Explanation:
//   We use slice() to create a shallow copy of the students array so the original array is not modified.
//   The sort function compares the score property of two students (a and b), sorting them in descending order by subtracting b.score from a.score.  