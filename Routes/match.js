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
router.post("/", (req,res)=>{
    res.json({"message": "Hello world"})
})
router.delete("/")
module.exports = router;