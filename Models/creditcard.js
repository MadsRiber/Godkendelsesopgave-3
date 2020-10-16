//laver class for creditcard
class creditcard{
    constructor(cardNumber, cvc, date, firstName, lastName){
        this.cardNumber = cardNumber
        this.cvc = cvc
        this.date = date
        this.firstName = firstName
        this.lastName = lastName
    }
}
//Hardcoder creditcard informationer for min paymentUser
var card1 = new creditcard("1111 2222 4444 5555", 888, "02/23", "Mads", "Riber")

//Exporter min variable card1 så den kan bruges i Routes mappen
exports.creditcard1 = Object.values(card1)