# JavaScript Callback Function

This is simple JavaScript callback function.

## Example Code

```js
function greet(name, cb) {
  return cb(name);
}

const result = greet("Tusar", (name) => {
  return `Good Evening ${name}`;
});

console.log(result);
```

```js
function sample(num1, num2, cb) {
  let a = num1 + num2;
  let b = num1 - num2;
  return cb(a, b);
}

const result2 = sample(10, 20, (a, b) => {
  return `The sum of ${a} and ${b} is ${a + b}`;
});

console.log(result2);
```

## Expected Output

```text
Good Evening Tusar
```
