const User = require('../models/User');
const { encryptPassword } = require('../utils/encryption');

const createNewUser = async (req, res) => {
  const user = req.body;
    return await User.create(user)
      .then(user => res.status(200).json(user))
      .catch(err => res.status(500).json({ Error: err.message }));
}

const hashRegPassword = async (req, res, next) => {
  const user = req.body;
  req.body = { ...user, password: await encryptPassword(user.password) };
  return next();
}

module.exports = { createNewUser, hashRegPassword };