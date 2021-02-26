const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
require('./config/dbConnect')();
const usersRoute = require('./routes/usersRoute');

const app = express();

//Passsing body data
app.use(express.json());

//Routes
app.use('/api/users', usersRoute);

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running successfully on Port ${PORT}`);
});