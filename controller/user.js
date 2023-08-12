const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config()
exports.AddUser =async (req,res)=>{
    try {
        const {name,password,email} = req.body;
    
    if(!name || !password || !email)
    {
        return res.status(401).json({
            success:false,
            message:"Please Fill All The Fields"
        })
    }
    let hashPass =await bcrypt.hash(password,10);
    const userResponce = await user.create({
        name,
        password:hashPass,
        email
    })
    return res.status(200).json({
        success:true,
        userResponce
    })
    
    } catch (error) {

        return res.status(401).json({
            success:false,
            data:error.message,
            message:'res not get'
        })
    }
}

exports.login = async (req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password)
        { 
            return res.status(401).json({
                success:false,
                message:"Please Fill All The Fields"
            })
        }

        let existUser = await user.findOne({email:email});

        if(!existUser)
        {
            return res.status(401).json({
                success:false,
                message:"User not found"
            })
        }

        if(bcrypt.compare(password,existUser.password))
        {
            const payload = {
                id : existUser._id,
                email:existUser.email
            }

            console.log(process.env.JS);
            const token = jwt.sign(payload,process.env.JS || "kjdglkbjdggkjlbsflkbj",{
                expiresIn:"30d"
            })

            existUser.password = undefined

            return res.cookie("token",token,{
                maxAge:3 * 24 * 60 * 60 * 1000
            }).status(200).json({
                success:true,
                message:"login successfull",
                token,
                existUser
            })
        }
        else
        {
            return res.status(401).json({
                success:false,
                message:"Invalid Password"
            })
        }
    } catch (error) {
        
        return res.status(401).json({
            success:false,
            error:error.message,
            message:'login failed'
        })
    }
}