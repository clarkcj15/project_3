const { Schema, model } = require('mongoose');

const rateDogSchema = Schema({
    rate: {type: Number},
    description: {type: String}
})
module.exports = model('RateDog', rateDogSchema);