const fs = require('fs')

var test = fs.readFileSync("./assets/text.txt")

console.log(test.toString())

console.log("over");
