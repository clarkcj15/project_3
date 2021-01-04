require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const dogsController = require('./controllers/dogs');
const ratedogsController = require('./controllers/ratedogs');
const MONGOURI = process.env.MONGODB_URI;
const show = { show: console.log }.show;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGOURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: true
})
mongoose.connection.on('error', (err) => {
    show(err.message)
})
mongoose.connection.on('disconnected', () => {
    show('MongNO')
})
mongoose.connection.once('open', () => {
    show('MonGO')
})

app.use('/doggos', dogsController);
app.use('/ratedogs', ratedogsController);

app.listen(PORT, () => {
    show('🐶', 'bork bork', PORT)
});