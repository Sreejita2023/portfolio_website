const mongoose=require("mongoose")
const fileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    gitlink:{
        type:String,
        required:true,
    },
    deploylink:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model("File",fileSchema)