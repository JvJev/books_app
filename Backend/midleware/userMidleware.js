// const usersSchema = require("../model/Users") 
// const sendRes = require("../modules/universalRes")


// module.exports = {
//   passwordValidation: (req, res, next) => {
//     const password = req.body;
//     if (password.length < 5){
//         return res.send({ error: true, message: 'Make longer password' });
//         console.log(password)
//     }next();
//   }

// };



module.exports = {
    passwordValidation: async (req, res, next) => {
      const { password, email } = req.body;
  
      if (password.length < 5) {
       return res.send({ ok: "blogas kodas" });
      }  next()
    }
  };
