require("dotenv").config();
const express = require("express");
const app = express();
const errorRouter = require("./Routes/error");
const userRouter = require("./Routes/user");
const {connection} = require("./db");
const User = require("./model/user");
const passport = require ("passport");

const {registerStrategy, loginStrategy, verifyStrategy} = require("./auth");
app.get("/", (req, res)=>{
    res.status(200).json({"msg": process.env});
});


app.use(express.json());

passport.use('register', registerStrategy);
passport.use('login', loginStrategy);
passport.use(verifyStrategy);

app.use ("/user", userRouter);
app.use("*", errorRouter);



app.listen(process.env.HTTP_PORT || 5000, async()=>{
    connection.authenticate();
    await User.sync({alter: true}); // this creates/updates tables
    console.log ("HTTP server started");
})
