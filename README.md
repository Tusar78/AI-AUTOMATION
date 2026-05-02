# 🚀 JavaScript Async Mastery – Quick Revision Notes For DAY 01

## 📌 1. Callback Function

### 🔹 What is Callback?

A callback is a function passed into another function to be executed later.

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Tusar", () => console.log("Done"));
```

---

### ❌ Problem (Callback Hell)

```javascript
loginUser(function(user) {
  getOrders(user.id, function(orders) {
    processPayment(orders, function(result) {
      console.log(result);
    });
  });
});
```

👉 Problems:

* Nested code 😵
* Hard to read
* Hard to debug

---

## 📌 2. Promise

### 🔹 What is Promise?

Promise represents a future result.

States:

* pending
* fulfilled
* rejected

---

### 🔹 Basic Syntax

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Success");
  } else {
    reject("Error");
  }
});
```

---

### 🔹 Handling Promise

```javascript
myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("Done"));
```

---

### 🔹 Key Concepts

* `.then()` → success handle
* `.catch()` → error handle
* `.finally()` → always runs

---

## 📌 3. async / await

### 🔹 Why?

Cleaner version of Promise (no chaining mess)

---

### 🔹 Example

```javascript
async function getData() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
```

---

### 🔹 Rules

* `await` only works inside `async`
* waits for Promise to resolve
* use `try/catch` for error handling

---

## 📌 4. fetch() API – GET Request

### 🔹 Example

```javascript
async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```

---

### 🔹 Key Points

* `fetch()` returns a Promise
* `res.json()` converts to JS object
* `res.ok` checks success

---

## 📌 5. fetch() API – POST Request

### 🔹 Example

```javascript
async function createPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "My Post",
        body: "Learning fetch API",
        userId: 1
      })
    });

    const data = await res.json();
    console.log(data);

  } catch (error) {
    console.log(error);
  }
}
```

---

### 🔹 Key Points

* `method: "POST"` → create data
* `headers` → tell server JSON format
* `body` → must be JSON string

---

## 📌 6. HTTP Methods Summary

| Method | Use             |
| ------ | --------------- |
| GET    | Fetch data      |
| POST   | Create new data |
| PUT    | Full update     |
| PATCH  | Partial update  |
| DELETE | Remove data     |

---

## 🧠 Final Mental Model

```text
Callback → messy
Promise → structured
async/await → clean & modern
fetch → real API communication
```

---

## 🔥 Quick Revision Checklist

✔ Callback problem clear
✔ Promise flow clear
✔ async/await usage clear
✔ fetch GET
✔ fetch POST
✔ basic error handling

---

## 🎯 10-Second Recall

👉 "Async কাজ → Promise → async/await → fetch দিয়ে API call"

---

## 🚀 Status

You are now:
👉 **API-ready JavaScript developer (solid foundation)**


# 🚀 JavaScript Array Methods – Quick Revision Notes Day 02

## 1. `.map()` — Transform Every Item

### What it does

`.map()` প্রতিটা item নিয়ে নতুন transformed array বানায়।

```js
const prices = [100, 200, 300];

const updatedPrices = prices.map(price => price * 1.1);

console.log(updatedPrices);
// [110, 220, 330]
```

### When to use

যখন array-এর প্রতিটা item change/format করতে হবে।

Real use:

* API data reshape করা
* UI card data বানানো
* price এর সাথে tax add করা

---

## 2. `.filter()` — Select Items by Condition

### What it does

`.filter()` condition true হলে item রাখে, false হলে বাদ দেয়।

```js
const products = [
  { name: "Cake", price: 500 },
  { name: "Burger", price: 200 }
];

const expensive = products.filter(product => product.price > 300);

console.log(expensive);
// [{ name: "Cake", price: 500 }]
```

### When to use

যখন array থেকে নির্দিষ্ট item বাছাই করতে হবে।

Real use:

* search result filter
* active users
* in-stock products
* price/category filtering

---

## 3. `.reduce()` — Make One Final Value/Object

### What it does

`.reduce()` পুরো array process করে একটা final value/object বানায়।

```js
const nums = [5, 10, 15];

const total = nums.reduce((acc, num) => acc + num, 0);

console.log(total);
// 30
```

### Object বানানো

```js
const posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" }
];

const postObject = posts.reduce((acc, post) => {
  acc[post.id] = post.title;
  return acc;
}, {});

console.log(postObject);
// { 1: "Post One", 2: "Post Two" }
```

### When to use

যখন array থেকে:

* total বের করতে হবে
* count করতে হবে
* group করতে হবে
* object বানাতে হবে

### Important rule

```js
acc[key] = value;
return acc;
```

`return acc[key] = value` দিলে ভুল হতে পারে, কারণ তখন accumulator না, value return হয়।

---

## 4. `.find()` — Find First Matching Item

### What it does

`.find()` condition match করা প্রথম item return করে।

```js
const users = [
  { id: 1, name: "Tusar" },
  { id: 2, name: "Jannat" }
];

const user = users.find(user => user.id === 1);

console.log(user);
// { id: 1, name: "Tusar" }
```

### When to use

যখন specific একটা item দরকার।

Real use:

* id দিয়ে user/product find করা
* product details page
* selected item বের করা

না পেলে `undefined` return করে।

---

## 5. `.findIndex()` — Find Matching Item Index

### What it does

`.findIndex()` condition match করা item-এর index return করে।

```js
const products = [
  { id: 1, name: "Cake" },
  { id: 2, name: "Burger" }
];

const index = products.findIndex(product => product.name === "Burger");

console.log(index);
// 1
```

### When to use

যখন item-এর position/index দরকার।

না পেলে `-1` return করে।

---

## 6. `.some()` — At Least One Match?

### What it does

`.some()` check করে অন্তত ১টা item condition match করে কিনা।

```js
const products = [
  { name: "Cake", price: 500 },
  { name: "Burger", price: 200 }
];

const hasExpensive = products.some(product => product.price > 400);

console.log(hasExpensive);
// true
```

### When to use

যখন জানতে হবে “কোনো একটা আছে কি?”

Real use:

* cart এ out-of-stock item আছে কিনা
* কোনো admin user আছে কিনা
* কোনো expensive product আছে কিনা

---

## 7. `.every()` — All Items Match?

### What it does

`.every()` check করে সব item condition match করে কিনা।

```js
const products = [
  { name: "Cake", inStock: true },
  { name: "Burger", inStock: true }
];

const allInStock = products.every(product => product.inStock);

console.log(allInStock);
// true
```

### When to use

যখন জানতে হবে “সবগুলো কি condition মানছে?”

Real use:

* সব form field filled কিনা
* সব product in stock কিনা
* সব task completed কিনা

---

## 8. Chaining — Multiple Methods Together

### What it does

Chaining মানে একটার result আরেকটার input হিসেবে use করা।

```js
const products = [
  { name: "Cake", price: 500, inStock: true },
  { name: "Burger", price: 200, inStock: false },
  { name: "Pizza", price: 700, inStock: true }
];

const finalProducts = products
  .filter(product => product.inStock)
  .filter(product => product.price > 300)
  .map(product => ({
    name: product.name,
    finalPrice: Number((product.price * 1.1).toFixed(2))
  }));

console.log(finalProducts);
```

### Real API example

```js
async function loadPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();

    const finalPosts = posts
      .filter(post => post.userId === 1)
      .map(post => ({
        id: post.id,
        title: post.title.slice(0, 50)
      }))
      .reduce((acc, post) => {
        acc[post.id] = post.title;
        return acc;
      }, {});

    console.log(finalPosts);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

loadPosts();
```

---

## Quick Comparison

| Method         | Purpose               | Return             |
| -------------- | --------------------- | ------------------ |
| `.map()`       | transform every item  | new array          |
| `.filter()`    | select items          | new array          |
| `.reduce()`    | make one final result | value/object/array |
| `.find()`      | first matching item   | item/undefined     |
| `.findIndex()` | first matching index  | index/-1           |
| `.some()`      | at least one match    | true/false         |
| `.every()`     | all match             | true/false         |

---

## Mental Model

```text
map      → change shape
filter   → select items
reduce   → combine into one result
find     → get one item
findIndex→ get item position
some     → any match?
every    → all match?
chaining → build data pipeline
```

## Final Rule

```text
Transform দরকার → map
Condition দিয়ে বাছাই → filter
Total/Object/Group দরকার → reduce
একটা item দরকার → find
index দরকার → findIndex
কোনো একটা আছে কিনা → some
সবগুলো ঠিক কিনা → every
multiple step একসাথে → chaining
```
