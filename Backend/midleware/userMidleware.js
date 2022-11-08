const usersSchema = require("../model/Users") 
const sendRes = require("../modules/universalRes")


module.exports = {
  passwordValidation: (req, res, next) => {
    const password = req.body;
    // if (password.leght < 5)
    //   return res.send({ error: true, message: 'Make longer password' });
    // next();
    console.log(password)
  },
};
