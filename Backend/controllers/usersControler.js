const User = require('../model/Users');

module.exports = {
  register: async (req, res) => {
    const { email, password } = req.body;

    new User({
      email,
      password,
    })
      .save()
      .then(() => {
        res.send({ ok: 'register controler works' });
      });
    console.log(email, password);
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    res.send({ ok: 'login controler works' });
  },
};
