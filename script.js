const express = require("express");
const app = express();
const port = 3000;
const user = require("./Routes/user");
const interests = require("./Routes/interests");
const match = require("./Routes/match");
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
app.listen(port, () => console.log(`started app on port: ${port}`));