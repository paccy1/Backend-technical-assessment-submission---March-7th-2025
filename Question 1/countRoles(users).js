function countRoles(users) {
    return users.reduce((acc, user) => {
      const role = user.roles;
      acc[role] = (acc[role] || 0) + 1; // Increment the count for this roles
      return acc;
    }, {});
  }
  
// Explanation:
// We use reduce to accumulate the roles.
// For each member, we increment the count of their roles in the accumulator object (acc).
