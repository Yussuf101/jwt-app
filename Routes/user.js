const express = require("express");
const router = express.Router();


router.post("register", (req , res)=>{
    res.status(200).json({msg: "register route"});
});

router.post("/login", (req, res)=>{
    res.status(200).json({msg: "login route"});
});


router.get("/profile", (req, res)=>{
    res.status(200).json({msg: "profile"});
})
module.exports = router