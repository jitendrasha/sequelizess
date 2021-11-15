const express = require("express");
const router = require('./route/route')

constusermodel = require('./model/usermodel');
constdb = require("./config/dbcon");

const mongoose = require("mongoose");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', router);


app.get('/', (req, res) => {

    res.send("hello  api")
    console.log("home api is running");

})

app.listen(4005, () => {
    console.log("server is running at the port  4005");
})