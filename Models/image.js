//Laver class for image
class image{
    constructor(imageId, time){
        this.imageId = imageId
        this.time = time
    }
};
//Hardcoder variabler så jeg kan indsætte dem hos min user
var image1 = new image (1, "16:27");
var image2 = new image (2, "12:14");
var image3 = new image (3, "18:28")
var image4 = new image (4, "08:03")

//Exporter variabler
exports.image1 = Object.values(image1)
exports.image2 = Object.values(image2)
exports.image3 = Object.values(image3)
exports.image4 = Object.values(image4)