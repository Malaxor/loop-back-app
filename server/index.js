const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
require('./routes/authRoutes')(app);
require('./services/passport');

app.listen(port);