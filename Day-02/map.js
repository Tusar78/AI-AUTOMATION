// const numbers = [1, 2, 3, 4];
// const double = numbers.map((num) => num * 2);
// console.log(double);

// // const users = [
// //   { name: "Tusar", age: 22 },
// //   { name: "Jannat", age: 20 },
// // ];

// // const names = users.map((user) => user.name);
// // console.log(names);

// //👉 Task 1:
// const prices = [100, 200, 300];
// const PricesWithTax = prices.map((price) => {
//   let tax = price * 0.1;
//   return price + tax;
// });

// console.log(PricesWithTax);

// // 👉 Task 2:
// const users = [
//   { name: "Tusar", role: "dev" },
//   { name: "Jannat", role: "designer" },
// ];

// const userNames = users.map((user) => user.name);
// console.log(userNames);

// //👉 Task 3 (Real thinking):
// const products = [
//   { name: "Cake", price: 500 },
//   { name: "Burger", price: 200 },
// ];

// const updatedProducts = products.map(product => {
//     return {
//         ...product,
//         inStock: true
//     }
// })
// console.log(updatedProducts);

// 🔥 Task 1 (API + map)
async function getProducts() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) {
      throw new Error("It's and error");
    }
    const data = await res.json();

    const productInfo = data.map((product) => {
      return {
        name: product.title,
        price: product.price,
      };
    });

    console.log(productInfo);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

getProducts();

// 🔥 Task 2 (API + map + condition)
async function showProducts() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) {
      throw new Error("It's and error");
    }
    const data = await res.json();

    const productInfo = data.map((product) => {
      let tax = 0;
      if (product.price > 100) {
        tax = product.price * 0.1;
      }
      return {
        ...product,
        price: (product.price + tax).toFixed(2),
      };
    });

    console.log(productInfo);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

showProducts();

//🔥 Task 3 (🔥 REAL DEV)
async function showUsers() {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      if (!res.ok) {
        throw new Error("It's and error");
      }
      const users = await res.json();
  
      const userInfo = users.map((user) => {
        return `${user.name} (${user.email})`
      });
  
      console.log(userInfo);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  
  showUsers();

  // 🔥 Task 4 (🔥 Advanced Thinking)
  async function productShow() {
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      if (!res.ok) {
        throw new Error("It's and error");
      }
      const data = await res.json();
  
      const productInfo = data.map((product) => {
        return {
          ...product,
          isExpensive: product.price > 100
        };
      });
  
      console.log(productInfo);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  
  productShow();