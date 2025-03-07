function power(base, exponent) {
    // Base case: If exponent is 0, return 1 (any number raised to 0 is 1)
    if (exponent === 0) {
      return 1;
    }
    // Recursive case: base * power of the base raised to exponent - 1
    return base * power(base, exponent - 1);
  }
//   Explanation:
//   If the exponent is 0, we return 1, as any number raised to the power of 0 is 1.
//   Otherwise, we recursively multiply base by power(base, exponent - 1).  