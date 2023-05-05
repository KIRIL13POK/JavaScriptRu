"use strict";

const serieSoprano = {
    originalTitle: "The Sopranos",
    year: "10 de enero de 1999",
    finish: "10 de junio de 2007",
    country: "USA",
    companies: ["HBO", " Brillstein Entertainment Partners"],
    awards: {
        year2007: {
            emmys: ["Best Drama Series", "Direction ", "Screenplay"],
            nominations: 15,
        },
        year2006: {
            emmys: ["Best Screenplay"],
            nominations: 7,
            extraPrize: "Best drama series",
        },
        year2004: {
            emmys: ["Best Screenplay", "script", "secondary", "secondary series"],
            nominations: 16,
        },
        year2003: {
            emmys: ["Best Actor", "Actress", "Supporting Actor", "script"],
            nominations: 13,
        },
        year2001: {
            emmys: ["Best Actor", "Actress", "Makeup", "Screenplay"],
            nominations: 22,

        },
        year2000: {
            emmys: ["Best Actor"],
            nominations: 18,

        },

    },

};
function showAwardsByYear(mainObject){
    let {year2007} = mainObject.awards;
    for ( let key in year2007){
        console.log(`Los premios de 2007 son ${key}: ${year2007[key]}.\n`);
        
    }
    
};
showAwardsByYear(serieSoprano);