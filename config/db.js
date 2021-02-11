const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://onion:redwood2016@auth-api.ufkkb.mongodb.net/users?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect.once('open', () => console.log(`Connected to mongo DB at ${DB_URL}!`));
