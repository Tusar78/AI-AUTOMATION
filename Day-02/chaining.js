const products = [
  { name: "Cake", price: 500, category: "dessert", inStock: true },
  { name: "Burger", price: 200, category: "fast-food", inStock: false },
  { name: "Pizza", price: 700, category: "fast-food", inStock: true },
  { name: "Ice Cream", price: 150, category: "dessert", inStock: true },
];

const finalProducts = products
  .filter((product) => product.inStock && product.price > 200) 
  .map((product) => {
    return {
        ...product,
        price: Number((product.price * 1.1).toFixed(2))
    };
  });

  console.log(finalProducts);
  
