const express = require("express");
const { createBlog } = require("../controller/blog");
const { auth } = require("../middleware/auth");

const Routes = express.Router();

Routes.post("/createblog",auth,createBlog);

module.exports = Routes;