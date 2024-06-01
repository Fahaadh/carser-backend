// const multer=require('multer')   //multermiddleware is for converting image from file to json file

// //To store multer data all words are predeefined
// const storage= multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,'./uploads')
//     },

//     //Set image name
//     filename:(req,file,callback)=>{
//         const filename =`image.${Date.now()}-${file.originalname}`
//         callback(null,filename)
//     }
// })

// const fileFilter =(req,file,callback)=>{
//     if(file.mimetype ==='image/png' || file.mimetype==='image/jpeg' || file.mimetype=== 'image/jpg'){
//         callback(null,true)
//     }
//     else{
//         callback(null,false)
//         return callback(new Error("Please upload the following file extension (png, jpeg, jpg) only"))
//     }
// }

// const multerConfig = multer({
//     storage,fileFilter
// })
// module.exports = multerConfig
