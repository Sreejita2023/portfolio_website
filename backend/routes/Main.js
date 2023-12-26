const express=require("express")
const router=express.Router()
const {createInfo}=require('../controller/Auth')
const {imageUpload}=require('../controller/fileUpload')
const {getImage}=require('../controller/fileUpload')


router.post('/imageUpload',imageUpload)
router.post('/createinfo',createInfo)

router.get('/getImage',getImage)
// router.get('/getinfo',getinfo)
module.exports=router