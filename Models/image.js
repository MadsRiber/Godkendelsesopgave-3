class image{
    constructor(imageId, time){
        this.imageId = imageId
        this.time = time
    }
};
var image1 = new image (1, "16:27");
var image2 = new image (2, "12:14");
var image3 = new image (3, "18:28")
var image4 = new image (4, "08:03")

exports.image1 = [image1]
exports.image2 = [image2]
exports.image3 = [image3]
exports.image4 = [image4]