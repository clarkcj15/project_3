const express = require('express');
const app = requite('./dog_api/app')

app.use(express.static('build'));