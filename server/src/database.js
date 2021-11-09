const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-images')
    .then(db => console.log('DB is connected'))
    .catch((err) => console.log(err))