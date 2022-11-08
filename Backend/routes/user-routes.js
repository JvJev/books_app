const express = require('express');
const router = express.Router();
const User = require('../model/Users');
const { register } = require('../controllers/usersControler');
const { passwordValidation } = require('../midleware/userMidleware');

//router.post("/login", login);
router.post('/register', passwordValidation, register);

module.exports = router;
