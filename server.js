const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

// if(process.env.MONGODB_URI) {
//     mongoose.connect(process.env.MONGODB_URI);
// } else {
//     mongoose.connect("mongodb.")
// }

mongoose.Promise = global.Promise
mongoose.connect( 
    process.env.MONGODB_URI || 'mongodb://user:Password1@ds227821.mlab.com:27821/heroku_q5l0p65r', { useMongoClient: true});

require('./routes/apiRoutes')(app);

app.listen(PORT, function () {
    console.log(`App running on port: ${PORT}`);
});