const User = require('../models/User');
const { users } = require('../data/users');

const { encryptPassword } = require('../utils/encryption');

const seedUsers = async (req, res) => {

  const hashedUsers = [];

  for (let i = 0; i < users.length; i++) {
    hashedUsers[i] = { ...users[i], password: await encryptPassword(users[i].password) };
  }

  User.create(hashedUsers)
    .then(users => res.status(200).send(users))
    .catch(err => res.status(500).send({ Error: err.message }));
};

module.exports = { seedUsers };