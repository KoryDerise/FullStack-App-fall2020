const router = require('express').Router();
const { createNewUser, hashRegPassword } = require('../controllers/registerController');

// /register
router.post('/', hashRegPassword, createNewUser);

module.exports = router;