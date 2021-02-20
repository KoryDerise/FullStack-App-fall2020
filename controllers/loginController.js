const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authenticatePassword = async (req, res, next) => {
  if (!req.body.username || !req.body.password) return res.status(500).send({message: "Please enter your username and password."});

  const userProvidedUsername = req.body.username;
  const userProvidedPassword = req.body.password;

  const dbUser = await User.findOne({ username: userProvidedUsername });
  if (!dbUser) return res.status(403).send({ message: "Username or password is incorrect."});

  const passwordMatch = await bcrypt.compare(userProvidedPassword, dbUser.password);
  if (!passwordMatch) return res.status(403).send({ message: "Username or password is incorrect."});

  req.body.curUser = dbUser;
  return next();
};

const createToken = (req, res) => {
  const token = jwt.sign({ _id: req.body.curUser._id }, process.env.TOKEN_SECRET);
  return res.status(200).send({token: token, userId: req.body.curUser._id});
}

const verifyToken = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied.');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.verified = true;
    next();
  } catch(err) {
    return res.status(400).send('Invalid Token.');
  }
}

const protectedData = (req, res) => {
  return res.status(200).send({
    superSecretData: "123456"
  });
}

module.exports = { authenticatePassword, createToken, verifyToken, protectedData };