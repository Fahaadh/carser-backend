const service=require('../Models/serviceSchema')

exports.addService =async(req,res)=>{
    console.log("Inside the addService methood");
    const {VIN,model,rcowner,email,phone,date}=req.body
   
    const userId =req.payload
    console.log(VIN,model,rcowner,email,phone,date);
    console.log(userId);

    try{
        const existingService =await service.findOne({VIN})
        if(existingService){
            res.status(406).json("Service already exist")
        }
        else{
           const newService =new service({VIN,model,rcowner,email,phone,date,userId})
           await newService.save()
           
            res.status(200).json(newService)
        }
    }
    catch(err){
        res.status(401).json({message:err.message});
    }
    
}

//Get all user service
exports.getAllUserservice=async(req,res)=>{

    const searchKey =req.query.search
     console.log(searchKey);  

    let query={}
    if(searchKey){
        query.VIN={ $regex :searchKey, $options :"i"} // 5 search nte code 
     }

    try{
        const AllUserService= await service.find(query) // 6 ee query um search nte code 
        if(AllUserService){
            res.status(200).json(AllUserService)
        }
        else{
            res.status(401).json("Can't find Service")
        }
    }
    catch(err){
        res.status(401).json({message:err.message})
    }

}

//get a user service
exports.getAUserService=async(req,res)=>{
    console.log("inside get a user service");
    const userId =req.payload
    console.log(userId);

    try{
        const AUserService = await service.find({userId})
        console.log(AUserService);
        if(AUserService){
            res.status(200).json(AUserService)
           
        }
        else{
            res.status(401).json("can't find any service ")
        }
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
}

//Delete a user Service
exports.deleteUserService = async(req,res)=>{
    const {pid} =req.params //get project id
    try{
        const deleteUserService = await service.findOneAndDelete({_id:pid}) //findOneAndDelete:find one and delete also display the rest on frontend
        res.status(200).json(deleteUserService) 
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
}

//update a user service
exports.updateUserService = async (req,res)=>{
    const{VIN,model,rcowner,email,phone,date} =req.body
    userId =req.payload
    const {sid}= req.params

    try{
        const updateService =await service.findByIdAndUpdate({_id:sid},{VIN,model,rcowner,email,phone,date,userId})
            await updateService.save()
            res.status(200).json(updateService)

    }
    catch(err){
        res.status(401).json({message:err.message})
    }
}


//email services
const sendApprovalEmail= require('../services/emailServices')

exports.approveService = async (req, res) => {
    try {
      const { email, service } = req.body;
  
      await sendApprovalEmail(email, service);
  
      res.status(200).send('Email sent successfully');
    } catch (error) {
      res.status(500).send('Error sending email: ' + error);
    }
  };
