const express = require("express");
let router = express.Router();

router
    .route("/")
    .get((req, res) =>{
        res.send("test igen")
    })
    /*.post((req, res)=>{})
    .put((req, res)=>{})
    .delete((req, res)=>{});*/

module.exports = router;