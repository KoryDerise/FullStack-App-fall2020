const User = require('../models/User');
const { users } = require('../data/users');

const seedUsers = (req, res) => {
  User.create(users)
    .then(users => res.status(200).send(users))
    .catch(err => res.status(500).send({ Error: err.message }));
};

module.exports = { seedUsers };