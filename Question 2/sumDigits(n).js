function sumDigits(n) {
    // Base case: If n is less than 10, return the number itself
    if (n < 10) {
      return n;
    }
    // Recursive case: Add the last digit to the sum of the rest of the digits
    return n % 10 + sumDigits(Math.floor(n / 10));
  }
//   Explanation:
// n % 10 gives the last digit of the number.
// Math.floor(n / 10) removes the last digit by dividing the number by 10 and rounding it down.
// This function continues until n is less than 10, at which point we simply return n.