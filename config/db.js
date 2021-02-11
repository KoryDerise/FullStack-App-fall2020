const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => console.log(`Connected to mongo DB at ${DB_URL}!`));
