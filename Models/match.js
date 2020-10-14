class match{
    constructor(matchId){
        this.matchId = matchId;
    }
}
//Henter vores interests for begge users ind 
const interests = require("./interests.js");

//Lav generel funktion for sammenligne interesser i stedet for fokuseret på et bestemt sæt interesser som nedenunder RAPPORT
//Her checker vi om interests matcher
const interestsMatches = interests.interests1.filter(element => interests.interests2.includes(element));
//Her laver en function der bestemmer om users matcher eller ej, ud fra om de har fælles interesser.
if (interestsMatches.length !== 0 ){
    var matched = "Match!"
}
else{
     var matched  = "No match!"
}
const interestsMatches1 = interests.interests3.filter(element => interests.interests4.includes(element));
//Her laver en function der bestemmer om users matcher eller ej, ud fra om de har fælles interesser.
if (interestsMatches1.length !== 0 ){
    var newMatched = "Match!"
}
else{
     var newMatched  = "No match!"
}
//exporter vores funktion for om et matcher
exports.Matches = [matched]
exports.newMatches = [newMatched]