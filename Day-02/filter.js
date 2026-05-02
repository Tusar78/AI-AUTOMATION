const numbers = [10, 20, 30, 40];
const bigNumber = numbers.filter(num => num > 20);
console.log(bigNumber);


const users = [
    { name: "Tusar", active: true },
    { name: "Rahim", active: false },
    { name: "Karim", active: true }
  ];

console.log(users);

const activeUsers = users.filter(user => user.active === true);
console.log(activeUsers);
