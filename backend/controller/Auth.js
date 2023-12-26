
const Info = require("../models/Info");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();



exports.createInfo=async (req, res) => {
    try {
        //get data from req body
        const {
            name,
            email,
            company,
            message,
        } = req.body;
        //validation data
        if(!name ||!email ||!company ||!message) {
                return res.status(403).json({
                    success:false,
                    message:"All fields are required",
                })
        }

         const response=await Info.create({name,email,company,message});

         res.status(200).json({
            success:true,
            date:response,
            message:'entry created successfully'
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Submit Failure, please try again',
        });
    }       
};


