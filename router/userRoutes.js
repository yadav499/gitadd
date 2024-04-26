const express = require("express");
const {  registeruser } = require("../controllers/userController");

const router = new express.Router();

router.post("/register", registeruser);


module.exports = router;