const express = require('express');
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

const { verifyToken } = require('./controllers/loginController');

const app = express();
const PORT = process.env.PORT || 5000;

// Database setup
require('dotenv').config();
require('./config/db');

// Server ReactJS App
app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
})

// --- MIDDLE WARE ---
app.use(express.json());
app.use('/users', usersRouter);
app.use('/tasks', verifyToken, tasksRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));