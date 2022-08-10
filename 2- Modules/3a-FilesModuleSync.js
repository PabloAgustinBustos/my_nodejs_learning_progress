const {readFileSync, writeFileSync} = require("fs");
const path = require("path");

console.log("start");

const first = readFileSync(path.join(__dirname, "content", "first.txt"), "utf8");
const second = readFileSync(path.join(__dirname, "content", "second.txt"), "utf8");

console.log(first);
console.log(second);

// si el archivo no existe, lo crea. Si existe, se sobreescribe
writeFileSync(
    path.join(__dirname, "content", "created.txt"), 
    `the result is: ${first}`
);

// append
writeFileSync(
    path.join(__dirname, "content", "created.txt"), 
    `the result is: ${first}`,
    {flag: "a"}
);

console.log("done with this task");

console.log("starting the next one");