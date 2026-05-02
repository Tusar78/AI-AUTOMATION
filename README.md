# JavaScript Foundations for AI Automation

Hands-on practice project focused on modern JavaScript fundamentals used in automation workflows: asynchronous programming, API handling, and array data transformation.

## Project Overview

This repository contains structured daily practice files to build practical JavaScript skills for real-world automation tasks.

- `Day-01`: Async JavaScript essentials (callbacks, promises, `async/await`, HTTP requests with `fetch`)
- `Day-02`: Array methods and data pipelines (`map`, `filter`, `reduce`, `find`, `some`, `every`, chaining)
- `README.md`: Central project documentation and quick reference

## Learning Goals

By working through this repository, you will be able to:

- write and reason about asynchronous JavaScript code
- handle API calls with proper error handling
- transform and filter API response data effectively
- build chained data-processing pipelines
- choose the right array method for each use case

## Tech Stack

- JavaScript (ES6+)
- Browser runtime
- `fetch` API
- Public practice APIs:
  - [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
  - [Fake Store API](https://fakestoreapi.com/)

## Repository Structure

```text
AI-AUTOMATION/
├── Day-01/
│   ├── App.js
│   └── index.html
├── Day-02/
│   ├── map.js
│   ├── filter.js
│   ├── reduce.js
│   ├── methods.js
│   ├── chaining.js
│   └── index.html
└── README.md
```

## Day-by-Day Coverage

### Day 01 - Async JavaScript and APIs

Main file: `Day-01/App.js`

Topics covered:

- callback function fundamentals
- callback limitations (readability and nested flow)
- promises (`resolve`, `reject`, `.then`, `.catch`, `.finally`)
- `Promise.all()` and `Promise.race()`
- `async/await` with `try/catch`
- `fetch` API for:
  - `GET` (single and multiple resources)
  - `POST`
  - `PUT`
  - `PATCH`
  - `DELETE`

### Day 02 - Array Methods and Data Transformation

Main files:

- `Day-02/map.js`
- `Day-02/filter.js`
- `Day-02/reduce.js`
- `Day-02/methods.js`
- `Day-02/chaining.js`

Topics covered:

- `map` for transformation
- `filter` for conditional selection
- `reduce` for aggregation and object creation
- `find` and `findIndex` for lookup operations
- `some` and `every` for boolean checks
- method chaining for clean data pipelines

## How to Run

### Option 1: Browser (recommended for this project)

1. Open `Day-01/index.html` or `Day-02/index.html` in your browser.
2. Open browser Developer Tools (`F12`) and go to the Console tab.
3. Uncomment or switch script references as needed in the related `index.html`.
4. Review console output.

### Option 2: VS Code Live Server

If you use Live Server:

1. Open the project in VS Code.
2. Right-click the target `index.html`.
3. Click **Open with Live Server**.
4. Check the browser console for results.

## Quick Reference: Array Methods

| Method | Use Case | Returns |
| --- | --- | --- |
| `map()` | Transform each element | New array |
| `filter()` | Keep elements by condition | New array |
| `reduce()` | Aggregate into one result | Value / object / array |
| `find()` | Get first matching element | Element / `undefined` |
| `findIndex()` | Get first matching index | Index / `-1` |
| `some()` | Check if any match exists | `true` / `false` |
| `every()` | Check if all match | `true` / `false` |

## Best Practices Followed

- use `try/catch` around async operations
- verify HTTP success with `response.ok`
- keep transformation logic readable and modular
- use descriptive object mapping instead of raw API objects
- prefer method chaining for concise data pipelines

## Current Status

This project currently includes:

- core async JavaScript practice
- practical API CRUD examples
- array-method exercises from basic to advanced
- real API response transformation scenarios

## Next Improvements

Recommended next steps to level this project up further:

- add a `Day-03` with DOM rendering from API data
- add small mini-project tasks per day
- add automated linting and formatting (`ESLint` + `Prettier`)
- add unit tests for utility transformations
- split reusable logic into helper functions/modules

## Contribution

This is a personal learning repository, but contributions and suggestions are welcome.

If you want to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your updates
4. Open a pull request with a clear description

## License

This project is currently shared for educational purposes.

If you want, you can add an explicit license file such as `MIT` for open-source reuse.
