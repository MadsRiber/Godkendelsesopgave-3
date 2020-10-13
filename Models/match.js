class match{
    constructor(matchId){
        this.matchId = matchId;
    }
}
//Henter vores interests for begge users ind 
const interests = require("./interests.js");


//Her checker vi om interests matcher
const interestsMatches = interests.interests1.filter(element => interests.interests2.includes(element));
//Her laver en function der bestemmer om users matcher eller ej, ud fra om de har fælles interesser.
if (interestsMatches.length !== 0 ){
    var matched = "Match!"
}
else{
     var matched  = "No match!"
}
//exporter vores funktion for om et matcher
exports.Matches = [matched]