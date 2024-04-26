const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./router/userRoutes");
const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.use("/api/v1/",userRoutes);

app.post("/register", (req,res)=>{
    const {name, message} =req.body;
    res.send({
        status:200,
        success:true,
        data:{
            name,
            message
        }

    })
})

app.listen(4000,()=>{
    console.log("Server is running on the port 4000");
})