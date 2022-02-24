const mongoose= require("mongoose");

module.exports= ()=> mongoose.connect(
    "mongodb+srv://Akash:Akash_7492@cluster0.wge50.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);