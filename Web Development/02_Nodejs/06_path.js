let fs = require("fs");
let path = require("path");

// fs.mkdirSync("lectures_");
// for(let i = 0; i < 10; i++){
//     let dirPathToMake = `Lecture-${i}`;
//     fs.mkdirSync(path.join(__dirname , "lectures_", dirPathToMake));
//     fs.writeFileSync(path.join(__dirname , "lectures_" , dirPathToMake, "readme.md"), `#readme for ${dirPathToMake}`);
// }

let ext = path.extname(path.join(__dirname, "05_abc.text"));
console.log(ext);
let baseName = path.basename(path.join(__dirname, "05_abc.text"));
console.log(baseName);