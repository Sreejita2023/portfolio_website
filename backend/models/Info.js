const mongoose = require("mongoose");
const mailSender =require('../utils/Mailsender')

const infoSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        trim:true,
    },
    company: {
        type:String,
        required:true,
    },
    message: {
        type:String,
        required:true    
    },
});

//a function -> to send emails
async function sendResponseEmail(email, name) {
    try{
        const mailResponse = await mailSender(email,`Webfolio - by Sreejita Sen`, `Thank you, ${name} for submitting your response.We will soon get in tough with you.Please explore my website to get more knowledge about me.`);
        console.log("Email sent Successfully: ", mailResponse);
    }
    catch(error) {
        console.log("error occured while sending mails: ", error);
        
    }
}


infoSchema.pre("save", async function(next) {
    await sendResponseEmail(this.email, this.name);
    await alertEmail(this.email, this.name,me);
    next();
})
module.exports = mongoose.model("Info", infoSchema);