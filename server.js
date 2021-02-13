const express = require('express');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

const app = express();
const PORT = process.env.PORT || 5000;

// Database setup
require('dotenv').config();
require('./config/db');

// --- MIDDLE WARE ---
app.use(express.json());
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));