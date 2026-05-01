// Callback Function

function greet(name, cb) {
  return cb(name);
}

const result = greet("Rakib", (name) => {
  return `Good Evening ${name}`;
});

console.log(result);

function sample(num1, num2, cb) {
  let a = num1 + num2;
  let b = num1 - num2;
  return cb(a, b);
}

const result2 = sample(10, 20, (a, b) => {
  return `The sum of ${a} and ${b} is ${a + b}`;
});

function proccessNumber(num, cb) {
  let result = num * 2;
  return cb(result);
}

const result3 = proccessNumber(5, (result) => {
  return `The result is ${result}`;
});
console.log(result3);

function calculate(a, b, callback) {
  let result = a + b;
  callback(result);
}

calculate(10, 20, (result) => {
  console.log(`Sum is ${result}`);
});

// Promise

// Task 1: Basic Promise
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`Big number`);
    } else {
      reject(`Small number`);
    }
  });
}

checkNumber(4)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//Task 2: Delay Promise
// function waitTwoSeconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Done waiting");
//     }, 2000);
//   });
// }

// waitTwoSeconds().then((res) => console.log(res));

// Task 3: Chaining (IMPORTANT)
function step1() {
  return Promise.resolve(5);
}

function step2(value) {
  let updatedValue = value ? value * 2 : 0;
  return Promise.resolve(updatedValue);
}

function step3(value) {
  let updatedValue = value ? value + 10 : 0;
  return Promise.resolve(updatedValue);
}

step1()
  .then((res) => step2(res))
  .then((res) => step3(res))
  .then((res) => console.log(res));

//Task 4: Error + finally
function riskyTask(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("Task Success");
    } else {
      reject("Task Failed");
    }
  });
}

riskyTask(true)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("Promise is settled");
  });

//Next Task: Promise.all()
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("A")
//   }, 1000)
// });

// p1.then(res => console.log(res));


const p1 = new Promise(resolve => setTimeout(()=>resolve("A"), 1000));
const p2 = new Promise((resolve, reject) => setTimeout(()=>reject("B"), 2000));
const p3 = new Promise(resolve => setTimeout(()=>resolve("C"), 1500));

Promise.all([p1, p2, p3])
.then(res => console.log(res))
