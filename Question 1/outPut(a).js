function countRoles(users) {
    return users.reduce((acc, user) => {
      const role = user.roles;
      acc[role] = (acc[role] || 0) + 1; // Increment the count for this roles
      return acc;
    }, {});
  }
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
  
  console.log(countRoles(users)); 
  