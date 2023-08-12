const express = require("express");
const { AddUser, login } = require("../controller/user");

const routes = express.Router();

// routes.post("/createuser",AddUser);
routes.post("/login",login);

module.exports = routes;