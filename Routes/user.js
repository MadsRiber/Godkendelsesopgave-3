const express = require("express");
let router = express.Router();
const Users = require("../Models/user.js");
const match = require("../Models/match.js")


router.get("/", (req, res) =>{
        res.json(Users.myUsers)
    });
router.get("/freeuser", (req, res)=>{
    res.json(Users.freeUsers)
})
router.get("/paymentuser", (req, res)=>{
    res.json(Users.paymentUsers)
    })
router.delete("/", (req, res)=>{
    Users.myUsers = []
    Users.myUsersUpdated = []
    res.json({"message": "Users deleted"})
})
router.put("/", (req,res)=>{
    Users.myUsers = Users.myUsersUpdated
    match.Matches = match.newMatches
    res.json({"message": "Updated"})
})
router.post("/", (req,res)=>{
    res.json({"message": "Users created"})
})
module.exports = router;
