let fs = require("fs");

// functions such as create, read, update, delete

/*  FOR FILES:  

    create -> openSync() -w, writeFileSync(), appendFileSync()
    read -> readFileSync(), 
    update -> appendFileSync(), 
    delete -> unlinkSync()
*/

/*  FOR FOLDERS: 
    create -> mkdirSync()
    read -> readdirSync()
    delete -> rmdirSync()

    existSync() -> if exist return true or false
    lstatSync return the path of that path or directory mentioned
*/

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

// reads and lists of contents inside that folder
// 
// let content = fs.readdirSync("Nayi Directory");
// console.log(content);
// to delete files from the folder nayi directory
// for(let i = 0; i < content.length; i++){
//     console.log("file" + content[i] + "is removed");
//     fs.unlinkSync("Nayi Directory/" + content[i]);  
// }
// fs.rmdirSync("Nayi Directory"); // to delete a directory

// fs.existsSync() -> if a file exist at a path -> true/false
// fs.lstatSync() -> gives file folder and then use .isFile and .isDirectory to check whether it is file or a directory. 
// let doesPathExist = fs.existsSync("05_abc.txt");
// console.log(doesPathExist);
// doesPathExist = fs.existsSync("abc.txt");
// console.log(doesPathExist);

// let detailsObj = fs.lstatSync(__dirname + "\\" + "04_fileSystem.js");
// let ans = detailsObj.isFile();
// console.log(ans);
// ans = detailsObj.isDirectory();
// console.log(ans);

fs.mkdirSync("lectures");
for(let i = 0; i < 10; i++){
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(__dirname + "\\" + "lectures" + "\\" + dirPathToMake);
    fs.writeFileSync(__dirname + "\\" + "lectures" + "\\" + dirPathToMake+ "\\" + "readme.md", `#readme for ${dirPathToMake}`);
}



