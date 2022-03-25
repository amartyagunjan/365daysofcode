let fs = require("fs");
let path = require("path");

// fs.mkdirSync("lectures_");
// for(let i = 0; i < 10; i++){
//     let dirPathToMake = `Lecture-${i}`;
//     fs.mkdirSync(path.join(__dirname , "lectures_", dirPathToMake));
//     fs.writeFileSync(path.join(__dirname , "lectures_" , dirPathToMake, "readme.md"), `#readme for ${dirPathToMake}`);
// }

let ext = path.extname(path.join(__dirname, "05_abc.text")); // return the extention name of the file.
console.log(ext);
let baseName = path.basename(path.join(__dirname, "05_abc.text")); // return the base file
console.log(baseName);

/*
------------------------------------- LINKS TO FOLLOW ---------------------------------------------------

This link has details of the commonly used function in Path Module

https://www.javascripttutorial.net/nodejs-tutorial/nodejs-path-module/#:~:text=in%20Node.js-,Node.,paths%20in%20the%20file%20system.


*/
