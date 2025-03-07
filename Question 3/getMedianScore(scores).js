function getMedianScore(scores) {
    scores.sort((a, b) => a - b);  // Sort the scores in ascending order
    const mid = Math.floor(scores.length / 2);
    
    if (scores.length % 2 === 0) {
      // If even number of scores, return the average of the two middle scores
      return (scores[mid - 1] + scores[mid]) / 2;
    } else {
      // If odd number of scores, return the middle score
      return scores[mid];
    }
  }
//   Explanation:
//   First, we sort the scores array in ascending order.
//   Then, we check if the array has an even or odd length.
//   If it has an even length, the median is the average of the two middle elements. If it has an odd length, the median is the middle element.  