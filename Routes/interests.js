//Henter express app samt de andre ting der skal bruges
const express = require("express");
let router = express.Router();
const interests = require("../Models/interests.js");

//Laver min get funktion
router.get("/", (req, res)=>{
        res.json(interests.myInterests)
});
module.exports = router;
