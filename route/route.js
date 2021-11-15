const model = require("../model/usermodel");
const express = require("express");
const adduser = require("../model/usermodel");


const router = express.Router();


router.post('/po', adduser);


module.exports = router;