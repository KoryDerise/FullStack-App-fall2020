const router = require('express').Router();
const { authenticatePassword, createToken, verifyToken, protectedData } = require('../controllers/loginController');

// /login
router.post('/', authenticatePassword, createToken);
router.get('/', verifyToken, protectedData);

module.exports = router;