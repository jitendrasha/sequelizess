const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/janam').then(() => {
    console.log("db connectd");
}).catch((err) => {
    console.log(err);
})