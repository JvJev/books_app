module.exports = {
  passwordValidation: async (req, res, next) => {
    const { password, email } = req.body;

    if (password.length < 5) {
        
      return res.send({ ok: 'per trumpas vartotojo slaptazidis' }); ;
    }
    next();
  },
};
