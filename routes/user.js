const express = require("express");
const { AddUser, login } = require("../controller/user");
const { getBlogs } = require("../controller/blog");

const routes = express.Router();

// routes.post("/createuser",AddUser);
routes.post("/login",login);
routes.get("/blogs",getBlogs);
module.exports = routes;