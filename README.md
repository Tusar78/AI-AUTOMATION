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
