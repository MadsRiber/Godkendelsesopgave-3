class interests{
    constructor(gender, music, movies, sports, food,){
        this.gender = gender;
        this.music = music;
        this.movies = movies;
        this.sports = sports;
        this.food = food;
    }
}
//Laver interesser for begge Users
var interests1 = new interests("Female", "pop", "Sci-fi", "Basketball", "Italian");
var interests2 = new interests("Male", "pop", "Romantic", "Fodbold", "Greek");

exports.myInterests = [interests1, interests2]
exports.interests1 = Object.values(interests1)
exports.interests2 = Object.values(interests2)