// const numbers = [10, 20, 30, 40];
// const bigNumber = numbers.filter(num => num > 20);
// console.log(bigNumber);

// const users = [
//     { name: "Tusar", active: true },
//     { name: "Rahim", active: false },
//     { name: "Karim", active: true }
//   ];

// console.log(users);

// const activeUsers = users.filter(user => user.active === true);
// console.log(activeUsers);

// Task 1: Basic filter
const numbers = [5, 12, 8, 20, 3, 30];
const bigNumber = numbers.filter((num) => num > 10);
console.log(bigNumber);

// Task 2: Object filter
const users = [
  { name: "Tusar", active: true },
  { name: "Jannat", active: false },
  { name: "Rahim", active: true },
];

const activeUsers = users.filter((user) => user.active === true);
console.log(activeUsers);

// Task 3: API + filter
async function productShow() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) {
      throw new Error("It's an Error");
    }

    const products = await res.json();

    // Using Filter
    const expensiveProduct = products.filter((product) => product.price > 100);

    // Using Map
    const productInfo = expensiveProduct.map((product) => {
      return {
        title: product.title,
        price: product.price,
      };
    });

    // Display Product
    console.log(productInfo);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

productShow();

//Task 4: Search filter
const products = [
  { title: "Chocolate Cake", price: 500 },
  { title: "Vanilla Cake", price: 450 },
  { title: "Burger", price: 200 },
  { title: "Pizza", price: 700 },
];

const searchText = "cake";

const searchProduct = products.filter(product => {
    return product.title.toLowerCase().includes(searchText.toLocaleLowerCase())
})
console.log(searchProduct);