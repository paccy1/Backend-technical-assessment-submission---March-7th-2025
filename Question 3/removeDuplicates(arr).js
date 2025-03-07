function removeDuplicates(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (!result.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
//   Explanation:
//   We loop through each element of the array, checking if it already exists in the result array.
//   If the element is not in result, we push it into the result array.
//   This removes duplicate numbers because only the first occurrence of each number is added.
    