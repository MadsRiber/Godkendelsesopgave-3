//User, Payment User og Free User
class User{
    constructor(userId, firstName, lastName, age, gender, email, password, location, interests){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.passwrod = password;
        this.location = location;
        this.interests = interests;
    }
    
}

class paymentUser extends User{
    constructor(userId, firstName, lastName, age, gender, email, password, location, interests, creditCard){
        super(userId, firstName, lastName, age, gender, email, password, location, interests)
        this.creditCard = creditCard;
}

}

class freeUser extends User{
    constructor(userId, firstName, lastName, age, gender, email, password, interests, location){
        super(userId, firstName, lastName, age, gender, email, password, interests, location);
    }
}

const creditCard = require("./creditcard.js")
const interests1 = require("./interests.js")
const interests2 = require("./interests.js")
// laver vores Users med nogle attributter
var paymentUser1 = new paymentUser(1, "Mads", "Riber", 21, "Male", "madsriber8@gmail.com", "fisk123", "Frederiksberg", [interests1], creditCard);

var freeUser1 = new freeUser (2, "Emilie", "Hansen", "22", "Female", "Emilie.hansen@gmail.com", "hest123", [interests2], "Frederiksberg");

exports.myUsers = [paymentUser1, freeUser1];
exports.freeUsers = [freeUser1];
exports.paymentUsers = [paymentUser1];