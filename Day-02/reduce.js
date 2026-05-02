// const numbers = [10, 20, 30];

// const total = numbers.reduce((sum, num) => {
//     return sum + num;
// }, 0)

// console.log(total);

// const cart = [
//     { price: 100 },
//     { price: 200 },
//     { price: 300 }
//   ];

// const total1 = cart.reduce((sum, num) => {
//     return sum
// }, 0)

// console.log(total1);

// const users = [
//     { name: "A", role: "dev" },
//     { name: "B", role: "designer" },
//     { name: "C", role: "dev" }
//   ];

//   const grouped = users.reduce((acc, user) => {
//     if (!acc[user.role]) {
//       acc[user.role] = [];
//     }
//     acc[user.role].push(user);
//     return acc
//   }, {});

// console.log(grouped);

// 🔥 Task 1 (basic sum)
const nums = [5, 10, 15];
const total = nums.reduce((acc, num) => acc + num, 0);
console.log(total);

// 🔥 Task 2 (cart total)
const carts = [
  { name: "Cake", price: 500 },
  { name: "Burger", price: 200 },
];

const cartTotal = carts.reduce((acc, cart) => {
  return acc + cart.price;
}, 0);

console.log(cartTotal);

// 🔥 Task 3 (count items)
const orders = ["cake", "burger", "cake", "pizza", "burger"];
const countOrder = orders.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;

  return acc;
}, {});

console.log(countOrder);

// 🔥 Task 4 (API + reduce)
async function showProduct() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) {
        throw new Error("It's an Error");
    }

    const products = await res.json();

    const totalPrice = products.reduce((acc, item) => {
        return acc + item.price;
    }, 0)

    console.log(Number(totalPrice.toFixed(2)));

  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

showProduct();


// 🔥 Task 5 (🔥 ADVANCED)
async function productShow() {
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      if (!res.ok) {
          throw new Error("It's an Error");
      }
  
      const products = await res.json();
      
  
      const productInfo = products.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = []
        }

        acc[item.category].push(item);

        return acc;
      }, {})

      console.log(productInfo);
      


    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  
  productShow();
  