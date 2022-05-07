const request = require("request");
const cheerio = require("cheerio");
const { getSystemErrorMap } = require("util");
// feature -> request module
// cb -> callback function
console.log("Before");
request('https://www.worldometers.info/coronavirus/', cb);
function cb(error, response, body) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    } else {
        handleHtml(body); // Print the HTML for the Google homepage.
    }
}
console.log("After");
function handleHtml(html) {
    let fetchedData = cheerio.load(html);
    let data = fetchedData(".maincounter-number span");
    for(let i = 0; i< data.length; i++){
        // console.log(data[i]);
        console.log(fetchedData(data[i]).text());
    }
    console.log(data.length);
}