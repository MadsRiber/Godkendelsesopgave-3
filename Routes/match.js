const express = require("express")
let router = express.Router();
const match = require("../Models/match.js")

router.get("/", (req, res)=>{
    res.json(match.Matches)
})
module.exports = router;