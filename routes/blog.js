const express = require("express");
const { createBlog, getBlogs } = require("../controller/blog");
const { auth } = require("../middleware/auth");
const Routes = express.Router();

Routes.post("/createblog",auth,createBlog);
Routes.get("/blogs",getBlogs);
module.exports = Routes;