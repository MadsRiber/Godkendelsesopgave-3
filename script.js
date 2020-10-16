//Henter de biblioteker der skal bruges samt sætter min port til 3000
const express = require("express");
const app = express();
const port = 3000;
const user = require("./Routes/user");
const interests = require("./Routes/interests");
const match = require("./Routes/match");
const fs = require("fs")
const jwt = require("jsonwebtoken")

//Opsætter mine endpoints og referer til den mappe de skal hente informationer fra
app.use("/interests", interests);

app.use("/user", user);
app.use("/match", match);

//En get for at kunne se mulige endpoints
app.get("/", (req, res)=>{
    res.send("Paths are /match /user /paymentuser /freeuser /interests")
});

//jwtokens
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

//Kode for at kunne se om min kode virker og kører på porten 3000.
app.listen(port, () => console.log(`started app on port: ${port}`));