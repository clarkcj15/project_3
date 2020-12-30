const { Schema, model } = require('mongoose');

const dogSchema = Schema({
    breed: {type: String},
    good: {type: Boolean, default: true},
    rate: {type: Number},
    description: {type: String}
})
module.exports = model('Dog', dogSchema);