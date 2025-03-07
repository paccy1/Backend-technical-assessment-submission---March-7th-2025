function reverseString(str) {
    // Base case: If string is empty or just 1 character, return it
    if (str.length <= 1) {
      return str;
    }
    // Recursive case: Reverse the substring (excluding the first character) and add the first character to the end
    return reverseString(str.slice(1)) + str[0];
  }
//   Explanation:
//   We break down the string by removing the first character (str.slice(1)) and then recursively reverse the rest of the string.
//   Once we reach the base case (string of length 1 or empty), we start building the reversed string.  