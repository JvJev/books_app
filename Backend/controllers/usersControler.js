// const User = require('../model/Users');

// const getUserById = async (req, res, next) => {
//   const id = req.params.id;
//   let user;
//   try {
//     user = await User.findById(id);
//   } catch (err) {
//     console.log(err);
//   }
//   if (user) {
//     return res
//       .status(404)
//       .json({ message: 'Such user exixts, welcome to login and see the Cat' });
//   }
//   return res.status(200).json({ user });
// };

// const addUser = async (req, res, next) => {
//   const { email, password } = req.body;
//   let user;
//   try {
//     user = new Book({
//       email,
//       password,
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   const userExists = await userSchema.findOne({ email, password });
//   if (userExists) {
//     return res.status(500).json({ message: 'such user exists' });
//   }
//   await user.save();
//   return res.status(201).json({ user });
// };

// exports.addUser = addUser;
// exports.getUserById = getUserById;

const User = require('../model/Users');

module.exports = {
  register: async (req, res) => {
    const { email, password } = req.body;

//     new User({
//       email,
//       password,
//     })
//       .save()
//       .then(() => {
         res.send({ ok: 'register controler works' });
//       });
//     console.log(email, password)
//   },
//   login: async (req, res) => {
//     const { email, password } = req.body;
console.log(email, password)


    // res.send({ ok: 'login controler works' });
  },
};
