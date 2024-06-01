//1 Loads .env file contents into process.env by defalut
require('dotenv').config()

//2 imprt express
const express= require('express')

//3 import cors
const cors= require('cors')

//7import DB
const db=require('./DB/connection')

//8import router
const router=require('./Routes/router')

//4 create a application using express cr (car)
const carserver =express()

//5use
carserver.use(cors())
carserver.use(express.json())

//9use router
carserver.use(router)

//6 port creation
const PORT=4000 || process.env.PORT

carserver.listen(PORT,()=> {
    console.log('carserver listining on port'+PORT);
})

carserver.get('/',(req,res)=>{
    res.send("Welcome to carserver")
})