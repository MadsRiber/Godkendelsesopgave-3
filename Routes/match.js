const express = require("express")
let router = express.Router();
const match = require("../Models/match.js")

//Laver min get funtion for matches
router.get("/", (req, res)=>{
    res.json(match.Matches)
})
//Opdaterer mine matches med Put()
router.put("/", (req,res)=>{
    match.Matches = match.newMatches
    res.json({"message": "Updated"})
})
module.exports = router;