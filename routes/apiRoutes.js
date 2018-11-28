const Kudo = require('../models/Kudo');
const User = require('../models/User');

module.exports = function (app) {
    // route to get Kudos
    app.get('/api/kudo', function (req, res) {
        Kudo.find(req.body).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        })
    });

    // route to get Users
    app.get('/api/user', function (req, res) {
        User.find({})
        .populate('kudos')
        .then(function (data) {
            res.json(data)
        }).catch(function (err) {
            res.json(err);
        })
    });

    //route to handle posting Kudos
    app.post('/api/kudo', function (req, res) {
        const newKudo = {
            from: req.body.from,
            to: req.body.to,
            title: req.body.title,
            message: req.body.message,
        }

        console.log(req.body);
        //req.body into parts
        Kudo.create(newKudo).then(function (kudoData) {
            return User.findOneAndUpdate({_id: req.body._id}, {$push: { kudos: kudoData._id} }, {new: true} );
        })
        .then(function(data) {
            console.log(data), "updated user";
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        });
    });

    app.post('/api/user', function (req, res) {
        User.create(req.body)
        .then(function (data) {
            res.json(data)
        }).catch(function (err) {
            res.json(err);
        })
    });
};