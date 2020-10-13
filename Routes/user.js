const express = require("express");
let router = express.Router();
const Users = require("../Models/user.js");

router.get("/", (req, res) =>{
        res.json(Users.myUsers)
    });

router.get("/freeuser", (req, res)=>{
    res.json(Users.freeUsers)
})
router.get("/paymentuser", (req, res)=>{
    res.json(Users.paymentUsers)
})
    /*.post((req, res)=>{})
    .put((req, res)=>{})
    .delete((req, res)=>{});*/

module.exports = router;