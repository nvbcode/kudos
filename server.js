const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/kudos', { useNewUrlParser: true});

require('./routes/apiRoutes')(app);

app.listen(PORT, function () {
    console.log(`App running on port: ${PORT}`);
});