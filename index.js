const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req,res)=>{
    res.send({
        status:200,
        message:"Hello, My name is Hemant"
    })
})

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