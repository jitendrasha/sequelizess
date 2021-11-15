const mongoose = require("mongoose");
constdb = require("../config/dbcon");
const express = require('express')

const User = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})



const Cus = new mongoose.model("User", User);


const adduser = async(req, res) => {
    console.log(req.body);

    const user = new Cus(req.body)
    const use = await user.save();

    res.send("user added");

}

module.exports = adduser