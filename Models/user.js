//class for user
class User{
    constructor(userId, firstName, lastName, age, gender, email, password, location, interests, image){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.passwrod = password;
        this.location = location;
        this.interests = interests;
        this.image = image;
    };
    
};
//Nedarvning af User til paymentUser
class paymentUser extends User{
    constructor(userId, firstName, lastName, age, gender, email, password, location, interests, creditCard, image){
        super(userId, firstName, lastName, age, gender, email, password, location, interests, image)
        this.creditCard = creditCard;
    };
};
//nedarvning af User til freeUser
class freeUser extends User{
    constructor(userId, firstName, lastName, age, gender, email, password, location, interests, image){
        super(userId, firstName, lastName, age, gender, email, password, location, interests, image)
    };
};
//Henter alt det data fra creditCard, interests og images som min Users skal bruge
const creditCard = require("./creditcard.js");
const interests = require("./interests.js");
const images = require("./image.js");

// Hardcoder mine users
var paymentUser1 = new paymentUser(1, "Mads", "Riber", 21, "Male", "madsriber8@gmail.com", "fisk123", "Frederiksberg", interests.interests1, creditCard, images.image1);
var freeUser1 = new freeUser (2, "Emilie", "Hansen", "22", "Female", "Emilie.hansen@gmail.com", "hest123", "Frederiksberg",  interests.interests2, images.image2);
var freeuser2 = new freeUser (4, "Hans", "Jensen", 22, "Male", "Hans@gmail.com", "dyr123", "Frederiksberg", interests.interests3, images.image3);
var paymentUser2 = new paymentUser(3, "Jacob", "Hejbøl", 21, "Male", "Jacobhejbøl@gmail.com", "ko123", "Frederiksberg", interests.interests4, images.image4);

//exporter mine users
exports.myUsers = [paymentUser1, freeUser1];
exports.freeUsers = [freeUser1];
exports.paymentUsers = [paymentUser1];
exports.myUsersUpdated = [freeuser2, paymentUser2]