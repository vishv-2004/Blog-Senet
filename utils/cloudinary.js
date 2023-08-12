const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const cdConnect = ()=>{
    try {
        cloudinary.config({
            api_key:process.env.API_KEY,
            cloud_name:process.env.CLOUD_NAME,
            api_secret:process.env.API_SECRET,
        })
        console.log("Clodinary connected");
    } catch (error) {
        console.log(error);
        console.log('Cloudinary not connected')
    }
}

module.exports = cdConnect;