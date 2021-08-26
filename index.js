require("dotenv").config();

const express = require("express");
const passport = require("passport");

const { registerStrategy, loginStrategy, verifyStrategy } = require("./auth");
const { connection } = require("./db");
const User = require("./model/user");
const errorRouter = require("./routes/error");
const userRouter = require("./routes/user");

const app = express();

app.use(express.json());

passport.use('register', registerStrategy);
passport.use('login', loginStrategy);
passport.use(verifyStrategy);

app.use("/user", userRouter);
app.use("*", errorRouter); // Use error router here

app.listen(process.env.HTTP_PORT || 5000, async() => {
    connection.authenticate();
    await User.sync({alter: true}); // This creates/updates tables
    console.log("HTTP Server Started");
});