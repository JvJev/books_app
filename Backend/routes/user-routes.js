const express = require("express");
const router = express.Router();
const User = require("../model/Users");
const passwordValidation = require("../midleware/userMidleware")

const {register, login} = require("../controllers/usersControler")


router.post("/login", login);
router.post("/register", register);


module.exports = router;
