let noMultiLine = "No multi-line strings in ES5"
console.log("Did you Know ? " + noMultiLine);

let multiLine = `
Using ES6
bacticks,
multi-line
strings are
possible`;

console.log(multiLine);

let first = `He said, "Don't you know? ES6, it's got some great features!"`;
let second = `"Wouldn't you want to learn more?" , he asked.`;

console.log(`${first} - and I got curious. ${second}`);