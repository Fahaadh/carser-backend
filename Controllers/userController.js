const users=require('../Models/userSchema')
 const jwt=require('jsonwebtoken') //for token
//For validation
const express= require('express')
const router= express.Router();

//validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Register Logic
exports.register = async(req,res)=>{
    console.log("Inside register methood"); 
    const{username,email,password}=req.body
    console.log(username,email,password);
    try{

        //validation 
        if (!emailRegex.test(email)) {
            return res.status(400).json("Invalid email format");
        }

        //check if email is alreaddy registered
        const existingUser= await users.findOne({email})
        console.log(existingUser);

        if(existingUser){
            res.status(406).json("User already registred")
        }
        else{
            const newUser= new users({
                username,
                email,
                password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
        
    }

    catch(err){
        res.status(500).json("Register failed...")
    }
}

//Login Logic
exports.login= async(req,res)=>{
    const {email,password}=req.body
    try{
        const existingUser =await users.findOne({email,password})
        if(existingUser){
            const token=jwt.sign({userId:existingUser._id},"super2024")  //jwt aanu token nte sanaam  payload
            console.log(token);
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(404).json("invalid email or password")
        }
    }
    catch(err){
        res.status(500).json("Register failed..."+err)
    }
    
}

//Diplay all users
exports.getAllUser=async(req,res)=>{ 

    let query={} 
    try{
        const AllUser= await users.find(query) // 6 ee query um search nte code 
        if(AllUser){
            res.status(200).json(AllUser)
        }
        else{
            res.status(401).json("Can't find users")
        }
    }
    catch(err){
        res.status(401).json({message:err.message})
    }

}