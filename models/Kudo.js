const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KudoSchema = new Schema ({
    to: {
        type: String,
        trim: true,
        required: '"To" is required' 
    },
    from: {
        type: String,
        trim: true,
        required: '"From" is required' 
    },
    message: {
            type: String,
            trim: true,
            required: '"Message" is required' 
    },
    title: {
        type: String,
        trim: true,
        required: '"Title" is required' 
}
});

const Kudo = mongoose.model('Kudo', KudoSchema);

module.exports = Kudo;