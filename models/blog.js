const mongoose = require("mongoose")


const BlogSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true
    },
    image:{
        type:String,
    },
    tags:[
        {
            type:String
        }
    ],
    title:{
        type:String
    }
})

module.exports = mongoose.model("Blog",BlogSchema);