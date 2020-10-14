const express = require("express")
let router = express.Router();
const match = require("../Models/match.js")

router.get("/", (req, res)=>{
    res.json(match.Matches)
})
router.put("/", (req,res)=>{
    match.Matches = match.newMatches
    res.json({"message": "Updated"})
})
module.exports = router;