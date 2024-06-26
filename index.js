const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./router/userRoutes");
const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.get("/", (req,res)=>{
    res.status(200).send({
        status:200,
        sucesss:true,
        message:"Welcome to Hemant's world"
    })
})
app.use("/api/v1/user",userRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log("Server is running on the port 4000");
})