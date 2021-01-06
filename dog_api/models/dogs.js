const { Schema, model } = require('mongoose');

const dogSchema = Schema({
    image: {type: String},
    breed: {type: String},
    rate: {type: Number},
    description: {type: String}
})
module.exports = model('Dog', dogSchema);