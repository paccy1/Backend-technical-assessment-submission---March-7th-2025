function findTopScorers(students, threshold) {
    return students.filter(student => student.score > threshold).map(student => student.name);
  }
//   Explanation:
//   filter is used to get the students whose score is greater than the given threshold.
//   After filtering, map is used to extract the student names and return them in an array.
    