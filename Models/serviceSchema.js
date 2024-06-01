//1 import mongoose

const mongoose =require('mongoose')

//2schema creation
const serviceSchema= new mongoose.Schema({
    VIN:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true,
        
    },
    rcowner:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    userId:{
        type:String,
         required:true
    }

})

//3 create model

const service=mongoose.model('service',serviceSchema)
module.exports=service