function greet(name, cb) {
    return cb(name);
}

const result = greet('Rakib', (name) => {
    return `Good Evening ${name}`;
})

console.log(result);