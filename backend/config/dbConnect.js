const mongoose = require('mongoose');

const dbConnect = () => {
    //Connect database
    mongoose.connect('mongodb+srv://rajanikantbore:jFlaUOjDIZ5gbeLt@cluster0.iy1er.mongodb.net/Library',
        {
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        })
        .then(() => console.log('DataBase Connected successfully'))
        .catch(err => console.log(err));
}

module.exports = dbConnect;