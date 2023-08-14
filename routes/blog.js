const express = require("express");
const { createBlog, getBlogs, getBlogById } = require("../controller/blog");
const { auth } = require("../middleware/auth");
const Routes = express.Router();

Routes.post("/createblog",auth,createBlog);
Routes.get("/blogs",getBlogs);
Routes.post("/blog",getBlogById);
module.exports = Routes;