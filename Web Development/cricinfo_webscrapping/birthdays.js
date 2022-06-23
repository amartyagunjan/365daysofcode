// Scrapping highest wicket taker from the winning team
// the url is given of the scorecard of some specific cricket match
const url = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/lucknow-super-giants-vs-kolkata-knight-riders-53rd-match-1304099/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
const { text } = require("cheerio/lib/static");

request(url, cb);
function cb(error, status, html) {
    if (error) {
        console.log(error);
    }
    else {
        // console.log(html);
        handleHtml(html);
    }
}

function handleHtml(html) {
    let $ = cheerio.load(html);
    let teams = $(".ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo-title.ds-mb-2");
    let WTeamName = "";
    // console.log(teams.length);
    for (let i = 0; i < teams.length; i++) {
        let hasClass = $(teams[i]).hasClass("ds-opacity-50");
        if (!hasClass) {
            wTeamName = $(teams[i]).find(".ds-text-tight-l.ds-font-bold").text().trim();
            // console.log(teamName);
        }
    }

    let inningsArr = $(".ds-bg-fill-content-prime.ds-rounded-lg");
    // console.log(inningsArr.length);
    for (let i = 0; i < inningsArr.length; i++) {
        let teamName = $(inningsArr[i]).find(".ds-text-tight-s.ds-font-bold.ds-uppercase").text();
        teamName = teamName.split("INNINGS");
        teamName = teamName[0].trim();
        // console.log("team length:" + team[0].length);
        // console.log(team[0].trim());
        // console.log(typeof(team));
        // let teams = $(team[0]).text();
        // console.log(team.length);    
        // console.log(teams);
        // here team[0]th part is the name of the team, we will enter that expandable which is of the winning team.
        // if (wTeamName == teamName) {
            // console.log(teamName);
            /* 
                Table arr contains both table
                1. batting table
                2. bowling table
            */
            let tableArr = $(inningsArr[i]).find(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table");
            // console.log(tableArr.length);
            let elements = $(tableArr).find(".ds-border-b.ds-border-line.ds-text-tight-s");
            // console.log(elements.length);
            for (let j = 0; j < elements.length; j++) {
                // if ($(elements).hasClass("ds-text-tight-s")) {
                let text = $(elements[j]).find("a");

                if(text.length >0){
                    let playerName = $(text).text();
                    // console.log(`${teamName}`, $(text).text());
                    let fullLink = "https://www.espncricinfo.com/" + $(text).attr("href");
                    // console.log(fullLink);
                    getBirthdays(playerName, teamName, fullLink);
                    
                }
                // }

            }
            
        // }
    }
}

function getBirthdays(playerName, teamName, fullLink){
    request(fullLink,cb );
    function cb(error, status, html){
        if(error){
            console.log(error);
        }
        else{
            extractBirhdays(playerName, teamName, html);
        }
    }
}

function extractBirhdays(playerName, teamName, html){
    let $ = cheerio.load(html);
    let playerDetailsArr = $(".ds-p-4 .ds-font-bold.ds-text-ui-typo");
    // console.log(playerDetailsArr.length);
    let birthday = $(playerDetailsArr[1]).text();
    // console.log(playerName);
    console.log(`${playerName} plays for team ${teamName} and was born on ${birthday}`);
}