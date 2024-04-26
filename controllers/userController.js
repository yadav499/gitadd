const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
// exports.defaultget =(req,res)=>{
//  res.send({
//     status:200,
//     sucess:true,
//     message:"Hii, Congratulations ! Welcome to Hemant's World"
//    })
// };

exports.registeruser=async(req,res)=>{
 const {name, email, password} = req.body;
 try {
     if(!name || !email || !password){
      return  res.status(401).send({
            success:false,
            message:"fill all the fields"
        })
     }
     const hashedpassword = await bcrypt.hash(password, 10);
     const user = new userModel({name, email, password:hashedpassword});
     await user.save();
     return res.status(200).send({
        success:true,
        message:"register successfully",
        user
     })
    
 } catch (error) {
    console.log(error);
   return  req.status(500).send({
        sucess:false,
        message:"Internal server error"
    })
    
 }
}

