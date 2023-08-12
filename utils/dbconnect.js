const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = ()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>console.log("Db is connected"),(err)=>{console.log(err);console.log("Db is not connected")})
}

module.exports = dbConnect;