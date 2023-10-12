const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/user");
const { scryptSync, randomBytes } = require("crypto");
const salt = randomBytes(16).toString("hex")


const router = express.Router();
module.exports = router;

router.post('/',(req,res,next)=>{
    res.status(200).json({mssg: 'Hello'});
    const p = req.body.password;
    const getHash = (password) =>{ scryptSync(p, salt, 32).toString("hex")};
    console.log(req.body.password);
    console.log(password);

});

