const express = require("express")
const app = express()
const port = 3000
const user = require("./Routes/user")
const interests = require("./Routes/interests")
const match = require("./Routes/match")

//Fortæller hvad der skal ske når man går ind på http://localhost:3000/interests
//Vi fortæller at den skal hive fat i "interests" som refererer til min interests.js
//Nedeunder gør vi det samme, bare med "user" og "match"
app.use("/interests", interests);

app.use("/user", user);

app.use("/match", match);

app.get("/", (req, res)=>{
    res.send("test")
    //Handle Root
});


app.get("/", (req, res) => res.send("Hello world"))
app.get("/user1", (req,res) =>{
    res.json({"message": "Super secret message"});
})
app.get("/readme", (req, res) => {
    res.json({"message": "Hello world"})
})

app.listen(port, () => console.log(`started app on port: ${port}`));