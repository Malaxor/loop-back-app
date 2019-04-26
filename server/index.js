const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
require('./routes/authRoutes')(app);
require('./models/User');
require('./services/passport');

const mongoose = require('mongoose');
const { mongoURI } = require('./config/keys');
mongoose.connect(mongoURI, { useNewUrlParser: true });

app.listen(port);