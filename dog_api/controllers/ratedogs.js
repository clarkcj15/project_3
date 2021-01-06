const express = require('express');
const ratedogs = express.Router();
const RateDog = require('../models/ratedogs');

//INDEX
ratedogs.get('/', async (req, res) => {
    try {
        //get dogs from mongo
        const foundRateDogs = await RateDog.find({});
        res.status(200).json(foundRateDogs);
    }catch(error) {
        res.status(400).json(error)
    }
});

//CREATE
ratedogs.post('/', async (req, res) => {
    console.log(req.body);
    try{
        const createdRateDog = await RateDog.create(req.body);
        res.status(200).json(createdRateDog)
    }catch(error) {
        res.status(400).json(error)
    }
});
//DELETE
ratedogs.delete('/:id', async (req, res) => {
    try{
        const deletedRateDog = await RateDog.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedRateDog);
    } catch(error) {
        res.status(400).json(error)
    }
})
//UPDATE
ratedogs.put('/:id', async (req, res) => {
    try{
        const updatedRateDog = await RateDog.findByIdAndUpdate(req.params.id);
        res.status(200).json(updatedRateDog);
    }catch (error) {
        res.status(400).json(error);
    }
})
//SHOW
ratedogs.get('/:id', async (req, res) => {
    try{
        const showRateDog = await RateDog.findById(req.params.id);
        rest.status(200).json(showRateDog)
    } catch (error) {
        res.status(400).json(error);
    }
})
module.exports = ratedogs;