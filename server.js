const express = require('express');
const app = require('./dog_api/app')

app.use(express.static('build'));