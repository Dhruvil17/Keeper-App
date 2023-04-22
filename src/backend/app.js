const express = require('express');
const cors = require('cors');
require('./db');

const {user} = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use('/user', user);

app.listen(port, function () {
    console.log(`Server is up and running on port ${port}!`);
});
