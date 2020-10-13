const { Router } = require("express");
const express = require("express");
let router = express.Router();
const interests = require("../Models/interests.js");

router.get("/", (req, res)=>{
        res.json(interests.myInterests)
});
module.exports = router;
