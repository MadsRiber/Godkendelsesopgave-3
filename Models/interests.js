//Laver class for interests
class interests{
    constructor(gender, music, movies, sports, food,){
        this.gender = gender;
        this.music = music;
        this.movies = movies;
        this.sports = sports;
        this.food = food;
    }
}
//Hardcoder interests som jeg kan bruge i mine Users
var interests1 = new interests("Female", "pop", "Sci-fi", "Basketball", "Italian");
var interests2 = new interests("Male", "pop", "Romantic", "Fodbold", "Greek");
var interests3 = new interests("Male", "country", "Romantic", "Fodbold", "Greek");
var interests4 = new interests("Female", "EDM", "Sci-fi", "Basketball", "Spanish");

//exporter mine interests
exports.myInterests = [interests1, interests2]
exports.interests1 = Object.values(interests1)
exports.interests2 = Object.values(interests2)
exports.interests3 = Object.values(interests3)
exports.interests4 = Object.values(interests4)
