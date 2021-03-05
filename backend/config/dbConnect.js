const mongoose = require('mongoose');

const dbConnect = () => {
    //Connect database
    mongoose.connect(process.env.MONGODB_URL,
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