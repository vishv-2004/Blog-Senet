const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const uploadImage =async (file,folder)=>{
    let option = { folder };
    try {
        return await cloudinary.uploader.upload(file.tempFilePath, option);
    } catch (error) {
        console.log('cloud error', error.message);
        throw error;
    }
}

module.exports = uploadImage;