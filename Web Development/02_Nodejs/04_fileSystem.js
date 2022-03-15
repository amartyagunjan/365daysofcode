let fs = require("fs");

// functions such as create, read, update, delete

// read 
let buffer = fs.readFileSync("02_abc.js");
// console.log("Bin data is: " + buffer);

// create
// fs.openSync("05_abc.txt", "w");
/*
    if there is no file writeFileSync creates the file and fill it with the given text
    if the file exists then the content inside the file get replaced with the given text in the function
*/
// fs.writeFileSync("05_abc.txt", "Aur Bhai kya haal chaal"); // create + write

// update
/*
    Nahi hogi to file banegi aur write hoga
    Hogi to existing file me add hoga
*/
// fs.appendFileSync("05_abc.txt", " sab thik thak na");


//////////////////////    FOLDERS    //////////////////////////////

// creating folder
// fs.mkdirSync("Nayi Directory");

// creating new file inside that folder
// fs.writeFileSync("Nayi Directory/nayiFile.txt", "Naya content");

// gives you list of contents inside that folder
let content = fs.readdirSync("Nayi Directory");
console.log(content);


