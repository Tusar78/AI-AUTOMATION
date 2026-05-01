// // Callback Function

// function greet(name, cb) {
//   return cb(name);
// }

// const result = greet("Rakib", (name) => {
//   return `Good Evening ${name}`;
// });

// console.log(result);

// function sample(num1, num2, cb) {
//   let a = num1 + num2;
//   let b = num1 - num2;
//   return cb(a, b);
// }

// const result2 = sample(10, 20, (a, b) => {
//   return `The sum of ${a} and ${b} is ${a + b}`;
// });

// function proccessNumber(num, cb) {
//   let result = num * 2;
//   return cb(result);
// }

// const result3 = proccessNumber(5, (result) => {
//   return `The result is ${result}`;
// });
// console.log(result3);

// function calculate(a, b, callback) {
//   let result = a + b;
//   callback(result);
// }

// calculate(10, 20, (result) => {
//   console.log(`Sum is ${result}`);
// });

// // Promise

// // Task 1: Basic Promise
// function checkNumber(num) {
//   return new Promise((resolve, reject) => {
//     if (num > 10) {
//       resolve(`Big number`);
//     } else {
//       reject(`Small number`);
//     }
//   });
// }

// checkNumber(4)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //Task 2: Delay Promise
// // function waitTwoSeconds() {
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve("Done waiting");
// //     }, 2000);
// //   });
// // }

// // waitTwoSeconds().then((res) => console.log(res));

// // Task 3: Chaining (IMPORTANT)
// function step1() {
//   return Promise.resolve(5);
// }

// function step2(value) {
//   let updatedValue = value ? value * 2 : 0;
//   return Promise.resolve(updatedValue);
// }

// function step3(value) {
//   let updatedValue = value ? value + 10 : 0;
//   return Promise.resolve(updatedValue);
// }

// step1()
//   .then((res) => step2(res))
//   .then((res) => step3(res))
//   .then((res) => console.log(res));

// //Task 4: Error + finally
// function riskyTask(success) {
//   return new Promise((resolve, reject) => {
//     if (success) {
//       resolve("Task Success");
//     } else {
//       reject("Task Failed");
//     }
//   });
// }

// riskyTask(true)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log("Promise is settled");
//   });

// //Next Task: Promise.all()
// // const p1 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("A")
// //   }, 1000)
// // });

// // p1.then(res => console.log(res));

// // const p1 = new Promise(resolve => setTimeout(()=>resolve("A"), 1000));
// // const p2 = new Promise((resolve, reject) => setTimeout(()=>reject("B"), 2000));
// // const p3 = new Promise(resolve => setTimeout(()=>resolve("C"), 1500));

// // Promise.all([p1, p2, p3])
// // .then(res => console.log(res))

// const p1 = new Promise((resolve) => setTimeout(() => resolve("Tusar"), 2000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("Jannat"), 1000));

// Promise.race([p1, p2]).then((res) => console.log(res));

// Async Await
// function getName() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Tusar");
//     }, 1000);
//   });
// }

// async function showName() {
//   const name = await getName();
//   console.log(name);
// }

// showName();

// function getUser() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({id: 1, Name: 'Tusar'})
//     }, 1000);
//   })
// }

// function getOrder() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(['Cake Order', 'Burger Order'])
//     }, 1000);
//   })
// }

// async function loadUserOrders() {
//   try {
//     const user = await getUser();
//     console.log(user.Name);

//     const orders = await getOrder();
//     console.log(orders[0]);

//   } catch (error) {
//     console.log(`Error ${error}`);

//   }
// }

// loadUserOrders();

function sendPromptToAI(prompt) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`AI Generated Response for: ${prompt}`);
    }, 1500);
  });
}

function saveToDatabase(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 101,
        saveData: data,
      });
    }, 1000);
  });
}

function sendEmail(saveItem) {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve(`Email sent for saved item ID: ${saveItem.id}`);
    }, 1000);
  });
}

async function runAutomation() {
  try {
    const aiResponse = await sendPromptToAI("Write a prduct description");
    console.log(aiResponse);

    const saveItem = await saveToDatabase(aiResponse);
    console.log(saveItem);

    const emailStatus = await sendEmail(saveItem);
    console.log(emailStatus);
  } catch (error) {
    console.log(`Error Message ${error}`);
  }
}

// runAutomation();

// Task
function getProduct() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Chocolate Cake",
        price: 500,
      });
    }, 1000);
  });
}

function checkStock(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      productId == 1 ? resolve("In Stock") : resolve("Not Available");
    }, 1000);
  });
}

async function productInfo() {
  try {
    const product = await getProduct();
    console.log(product.name);

    const inStock = await checkStock(product.id);
    console.log(inStock);
  } catch (error) {
    console.log(`Error Message: ${error}`);
  }
}

// productInfo();

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tusar");
    }, 1000);
  });
}
function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Pizza", "Chicken"]);
    }, 1000);
  });
}
function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Pizza" });
    }, 1000);
  });
}

async function loadDashboard() {
  const allInfo = await Promise.all([getUser(), getProducts(), getOrders()]);
  console.log(allInfo);
}

loadDashboard();
