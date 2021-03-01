const e = require('express');
const express = require('express');
const asynHandler = require('express-async-handler');
const User = require('../models/User')

const usersRoute = express.Router();

//Register
usersRoute.post('/register',
    asynHandler(async (req, res) => {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email: email });
        if (userExists) {
            throw new Error('User Exist');
        }
        const userCreated = await User.create({ email, name, password });

        res.send(userCreated);

    })
);

//Login
usersRoute.post('/login',
    asynHandler(async (req, res) => {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            res.status(200);

            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password
            });
        } else {
            res.status(401);
            throw new Error('invalid Credetials');
        }
    })
);

//UPDATE
usersRoute.put('/update', (req, res) => {
    res.send(`Update route`);
});

//FETCH
usersRoute.get('/', (req, res) => {
    res.send(`Fetch route`);
});

//DELETE
usersRoute.delete('/:id', (req, res) => {
    res.send(`Delete route`);
});

module.exports = usersRoute;