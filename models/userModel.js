const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "pls fill the name field"]
    },
    email:{
        type:String,
        required:[true, "pls fill the email field"]
    },
    password:{
        type:String,
        required:[true, "pls fill the password field"]
    }
});

const userModel = new mongoose.model("user", userSchema);
module.exports = userModel;