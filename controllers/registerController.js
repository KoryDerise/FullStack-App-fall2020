const User = require('../models/User');
const { encryptPassword } = require('../utils/encryption');
const jwt = require('jsonwebtoken');

const createNewUser = async (req, res) => {
  console.log('CREATE NEW USER');
  req.body.username = req.body.username.toLowerCase();
  req.body.email = req.body.email.toLowerCase();

  const uniqueEmailCheck = await User.find({ email: req.body.email });
  if (uniqueEmailCheck.length >= 1) return res.status(409).send({ message: "Email already exists." });

  const user = req.body;

  return await User.create(user)
    .then(user => {
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      res.status(200).json({ userId: user._id, jwt: token });
    })
    .catch(err => res.status(500).json({ Error: err.message }));
}

const hashRegPassword = async (req, res, next) => {
  const user = req.body;
  req.body = { ...user, password: await encryptPassword(user.password) };
  return next();
}

module.exports = { createNewUser, hashRegPassword };