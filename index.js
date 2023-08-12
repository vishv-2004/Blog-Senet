const express = require("express");
const cors  = require("cors");
const expressFileUpload = require("express-fileupload");
const dbConnect = require("./utils/dbconnect");
const userRoutes = require("./routes/user");
const blogRoutes = require("./routes/blog")
const cdConnect = require("./utils/cloudinary");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 5000 
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(expressFileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp",
}))
app.listen(port,()=>{
    console.log(`App Is Started Port ${port}`)
})

app.get((req,res)=>{
    return res.send("Your server is up and running ");
})
app.use("/api/v1",userRoutes);
app.use("/api/v1",blogRoutes);
dbConnect();
cdConnect();