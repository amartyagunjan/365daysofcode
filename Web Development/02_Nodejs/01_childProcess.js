// Understanding with chronology\
// Node js  -> It is just like smartphone where Apps can be downloaded and used.
// JavaScript -> It works just like our fingers which gives interacts with smartphone, here we give command to nodeJs via JavaScript
// Libraries -> these are just like applications on smartphone.

let cp = require("child_process");

console.log("Trying to open VsCode");
cp.execSync("code"); // command to open calculator..
console.log("Opened VsCode");

console.log("Trying to open Calculator");
cp.execSync("calc");
console.log("Opened Calculator");

console.log("Trying to open pepcoding website");
cp.execSync("start chrome https://www.pepcoding.com");
console.log("opened pepcoding website");

let output = cp.execSync("node 02_abc.js");
console.log("Output 🔥" + output);