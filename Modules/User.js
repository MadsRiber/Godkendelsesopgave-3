//User, Payment User og Free User
class User{
    constructor(firstName, lastName, age, gender, email, password, location, interests){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender
        this.email = email
        this.passwrod = password
        this.location = location
        this.interests = interests
    }
    
}

class paymentUser extends User{
    constructor(firstName, lastName, dob, gender, email, password, location, interests, creditCard){
        super(firstName, lastName, dob, gender, email, password, interests, location)
        this.creditCard = creditCard

}
}

class freeUser extends User{
    constructor(firstName, lastName, dob, gender, email, password, interests, location){
        super(firstName, lastName, dob, gender, email, password, interests, location)
    }
}