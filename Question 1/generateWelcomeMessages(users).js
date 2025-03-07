function generateWelcomeMessages(users) {
    return users.map(user => `Welcome, ${user.name}! You are a ${user.roles} user.`);
  }
//   Explanation:
// The map method is used to iterate over the array of users and return a new array of welcome messages formatted as required.

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
console.log(generateWelcomeMessages(users));