const jwt = require("jsonwebtoken")
require("dotenv").config();
exports.auth = async (req,res,next) => {
    try {
        const token = req?.header("Authorization")?.replce("Bearer ","") || req.cookies.token ;

    if(!token)
    {
        return res.status(401).json({
            success:false,
            message:"Token not found"
        })
    }

    const decode = jwt.verify(token,process.env.JS);

    req.user = decode;

    next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            data:error.message,
            message:'token not verified'
        })
    }
}