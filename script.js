const express = require("express");
const app = express();
const port = 3000;
const user = require("./Routes/user");
const interests = require("./Routes/interests");
const match = require("./Routes/match");
const fs = require("fs")
const jwt = require("jsonwebtoken")
//const freeUser = require("./Routes/user");
//const paymentUser = require("./Routes/user")

//Fortæller hvad der skal ske når man går ind på http://localhost:3000/interests
//Vi fortæller at den skal hive fat i "interests" som refererer til min interests.js
//Nedeunder gør vi det samme, bare med "user" og "match"
app.use("/interests", interests);

app.use("/user", user);
//app.use("/user", freeUser)
//app.use("/user", paymentUser)
app.use("/match", match);

app.get("/", (req, res)=>{
    res.send("Paths are /match /user /paymentuser /freeuser /interests")
    //Handle Root
});

app.get("/password", isAuthorized, (req,res)=> {
    res.json({"message": "Super secret message"})
})

app.get("/jwt", (req, res)=>{
    let privateKey = fs.readFileSync("./private.pem", "utf-8");
    let token = jwt.sign({"body": "stuff"}, privateKey, {algorithm: "HS256"});
    res.send(token);
})

function isAuthorized(req, res, next){
    if (typeof req.headers.authorization !== "undefined"){
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync("./private.pem", "utf-8")

        jwt.verify(token, privateKey, { algorithm: "HS256"},  (err, decoded) =>{
            if (err) {
                res.status(500).json({error: "Not Authorized"})
            }

            console.log(decoded);
            return next ();
        } )
        }
        else{
            res.status(500).json({ error: "Not Authorized" })
        }
    }


app.listen(port, () => console.log(`started app on port: ${port}`));