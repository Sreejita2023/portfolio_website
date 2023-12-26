const cloudinary = require('cloudinary').v2
const File=require('../models/Project')

// upload image to cloudinary
function isFileTypeSupported(type,supportedTypes){
    return supportedTypes.includes(type)
}
const uploadFiletoCloudinary=async(file,folder,quality)=>{
    const options={folder}
    options.resource_type="auto"
    if(quality){
        options.quality=quality
    }
   return  await cloudinary.uploader.upload(file.tempFilePath,options)
}
exports.imageUpload=async(req,res)=>{
    console.log("hello world!");
     console.log(req.body.name)
     
   try{
     const{name,imageUrl,description,gitlink,deploylink}=req.body
     
     const file=req.files.imageFile
     console.log(file)
     const supportedTypes=["jpg","jpeg","png"]
     const fileType=file.name.split('.')[1].toLowerCase()
     if(!isFileTypeSupported(fileType,supportedTypes)){
        return res.status(400).json({
            success:false,
            message:"This filetype does not exist"
        })
     }
     const response=await uploadFiletoCloudinary(file,"portfolio")
    console.log("response",response)
    const fileData=await File.create({
        name,
        description,gitlink,deploylink,
        imageUrl:response.secure_url
    })
    console.log(fileData)
    res.status(400).json({
        success:true,
        imageUrl:response.secure_url,
        message:"Image is uploaded"
    })

   }
   catch(err){
    console.log(err)
    return res.status(500)
    .json({
       success:false,
       data:"Error in coode",
       message:err.message,
    })
   }
}


// get the image from the cloudinary

exports.getImage=async(req,res)=>{
    try{
        const response=await File.find({})
        res.status(200).json({
            success:true,
            date:response,
            message:'entire data fetched'
        })
      }
      catch(err){
         console.error(err)
         console.log(err)
         res.status(500)
         .json({
            success:false,
            data:"internal server error",
            message:err.message,
         })
      }
}