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
      name: product.name,
      price: Number((product.price * 1.1).toFixed(2)),
    };
  });

// console.log(finalProducts);

// 🔥 Task: API Chaining (FINAL BOSS)
async function loadProducts() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) {
      throw new Error("It's an Error");
    }
    const products = await res.json();
    console.log(products);

    const finalProducts = products
      .filter(
        (product) => product.price > 100 && product.category === "electronics",
      )
      .map((product) => {
        return {
          title: product.title,
          finalPrice: Number((product.price * 1.1).toFixed(2)),
        };
      });

    console.log(finalProducts);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
// loadProducts();

// Another Problem

async function loadPosts() {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      if (!res.ok) {
        throw new Error("It's an Error");
      }

      const posts = await res.json();
      const finalPost = posts.filter(post => post.userId === 1).map(post => {
        return {
            ...post,
            title: post.title.slice(0, 50)
        }
      }).reduce((acc, post) => {
        acc[post.id] = post.title
        return acc
      }, {})

      console.log(finalPost);
      

     
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  loadPosts();