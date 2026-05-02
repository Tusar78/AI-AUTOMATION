//🔥 Task 1 (find)
const users = [
  { id: 1, name: "Tusar" },
  { id: 2, name: "Jannat" },
];

const user = users.find((user) => user.id === 1);
console.log(user);

//🔥 Task 2 (findIndex)
const products = [
  { id: 1, name: "Cake" },
  { id: 2, name: "Burger" },
];

const product = products.findIndex((product) => product.name.includes("Burger"));
console.log(product);

//🔥 Task 3 (some)
const products2 = [
    { name: "Cake", price: 500 },
    { name: "Burger", price: 200 }
  ];

const product2 = products2.some((product) => product.price > 400);
console.log(product2);

//🔥 Task 4 (every)
const products3 = [
    { name: "Cake", inStock: true },
    { name: "Burger", inStock: true }
  ];
  
const checkInstock = products3.every(product => product.inStock);
console.log(checkInstock);

//🔥 Task 5 (API + find)

async function findProduct() {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if (!res.ok) {
            throw new Error("It's an Error");
        }

        const users = await res.json();
        const user = users.find(user => user.id === 1);
        console.log(user);        
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
}

findProduct();