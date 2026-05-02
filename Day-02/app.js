const numbers = [1, 2, 3, 4];
const double = numbers.map((num) => num * 2);
console.log(double);

// const users = [
//   { name: "Tusar", age: 22 },
//   { name: "Jannat", age: 20 },
// ];

// const names = users.map((user) => user.name);
// console.log(names);

//👉 Task 1:
const prices = [100, 200, 300];
const PricesWithTax = prices.map((price) => {
  let tax = price * 0.1;
  return price + tax;
});

console.log(PricesWithTax);

// 👉 Task 2:
const users = [
  { name: "Tusar", role: "dev" },
  { name: "Jannat", role: "designer" },
];

const userNames = users.map((user) => user.name);
console.log(userNames);

//👉 Task 3 (Real thinking):
const products = [
  { name: "Cake", price: 500 },
  { name: "Burger", price: 200 },
];

const updatedProducts = products.map(product => {
    return {
        ...product,
        inStock: true
    }
})
console.log(updatedProducts);