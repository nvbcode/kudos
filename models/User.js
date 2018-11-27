const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    user: {
        type: String,
        trim: true,
        required: '"User" is required' 
    },
    kudos: [{
        type:Schema.Types.ObjectId,
        ref: 'Kudo'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;