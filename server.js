const express = require('express');
const app = require('./dog_api/app')

app.use(express.static('build'));

app.get('*', (req, res)=> {
    res.sendFile(path.resolve(`${__dirname}/build/index.html`));
  });