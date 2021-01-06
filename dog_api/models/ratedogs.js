const { Schema, model } = require('mongoose');

const rateDogSchema = Schema({
    image: {type: String,},
    rate: {type: Number},
    description: {type: String}
})
module.exports = model('RateDog', rateDogSchema);