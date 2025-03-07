function findAdmins(users) {
    const admin = users.filter(user => user.roles === "admin");
    return admin.length > 0 ? admin.map(user => user.name) : "No admin users found";
  }
//   Explanation:
// We use the filter method to get all the users with the "admin" level.
// If there are no admin user, the function returns "No admin users found".
// Otherwise, it returns an array of names using map.

//test
const users = [
  { name: 'Mupenzi', roles: 'instructor' },
  { name: 'Mutoni', roles: 'student' },
  { name: 'Bob', roles: 'student' },
  { name: 'Caelan', roles: 'student' },
  { name: 'Mutesi', roles: 'student' },
  { name: 'Kalisa', roles: 'student' },
  { name: 'Charlie', roles: 'admin' },
  { name: 'Eve', roles: 'admin' },
  { name: 'Frank', roles: 'admin' }
];
console.log(findAdmins(users)); // ['Alice', 'Charlie', 'Eve']