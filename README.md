# JavaScript Callback Function

This project demonstrates a simple JavaScript callback function.

## Project Structure

- `Day-01/index.html` - Basic HTML page that loads the JavaScript file.
- `Day-01/app.js` - Callback example code.

## Example Code

```js
function greet(name, cb) {
    return cb(name);
}

const result = greet("Rakib", (name) => {
    return `Good Evening ${name}`;
});

console.log(result);
```

## How to Run

1. Open `Day-01/index.html` in your browser.
2. Open browser Developer Tools.
3. Check the Console tab to see the output.

## Expected Output

```text
Good Evening Rakib
```

## Learning Goal

Understand how callback functions work by passing a function as an argument and executing it inside another function.