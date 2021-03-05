const express = require('express');
const dotenv = require('dotenv');
const error = require('./middlewares/errorMiddlewareHandler');
const usersRoute = require('./routes/usersRoute');
const authMiddleware = require('./middlewares/authMiddleware');
const bookRouter = require('./routes/bookRoutes');
dotenv.config();
require('./config/dbConnect')();


const app = express();

//Passsing body data
app.use(express.json());

//Routes
// users
app.use('/api/users', usersRoute);

//Books
app.use('/api/books', bookRouter);

console.log(process.env.MY_NAME);

//Error middleware
app.use(error.errorMiddlewareHandler);

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running successfully on Port ${PORT}`);
});