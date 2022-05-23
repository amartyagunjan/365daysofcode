// last ball commentry
const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/lucknow-super-giants-vs-kolkata-knight-riders-53rd-match-1304099/ball-by-ball-commentary";

request(url, cb);
function cb(error, response, body){
    if(error){
        console.log(error);
    }
    else{
        handleHtml(body);
    }
}

function handleHtml(html){
    let fetchedData = cheerio.load(html);
    let requiredDataArr = fetchedData(".ds-text-tight-m.ds-font-regular.ds-flex.ds-px-3.ds-py-2.ds-items-center.ds-relative .ds-ml-4 .ci-html-content");
    console.log(requiredDataArr.length);
    console.log(fetchedData(requiredDataArr[0]).text());
}