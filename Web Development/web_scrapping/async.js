const fs = require("fs");
// console.log("before");
// let data = fs.readFileSync("f1.txt");
// console.log(data + "");
// console.log("after");

// async function representation and definition

console.log("Before");
fs.readFile("f1.txt", cb);
function cb(err, data){
    // console.log(err);
    console.log(data + "");
}
console.log("After");
