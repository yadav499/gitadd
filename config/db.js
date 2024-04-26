const mongoose = require("mongoose");
const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.MONGO)
        console.log("database connected successfully");
    } catch (error) {
      console.log("database not connected", error);     
    }
}

module.exports = connectDB;