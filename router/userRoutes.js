const express = require("express");
const { defaultget, registeruser } = require("../controllers/userController");

const router = new express.Router();
router.get("/",defaultget);
router.post("/register", registeruser);

module.exports = router;