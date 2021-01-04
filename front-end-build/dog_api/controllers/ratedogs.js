const express = require('express');
const ratedogs = express.Router();
const RateDog = require('../models/ratedogs');

//INDEX
ratedogs.get('/', async (req, res) => {
    try {
        //get dogs from mongo
        const foundDogs = await RateDog.find({});
        res.status(200).json(foundDogs);
    }catch(error) {
        res.status(400).json(error)
    }
});

//CREATE
ratedogs.post('/', async (req, res) => {
    try{
        const createdDog = await RateDog.create(req.body);
        res.status(200).json(createdDog)
    }catch(error) {
        res.status(400).json(error)
    }
});
//DELETE
ratedogs.delete('/:id', async (req, res) => {
    try{
        const deletedDog = await RateDog.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedDog);
    } catch(error) {
        res.status(400).json(error)
    }
})
//UPDATE
ratedogs.put('/:id', async (req, res) => {
    try{
        const updatedDog = await RateDog.findByIdAndUpdate(req.params.id);
        res.status(200).json(updatedDog);
    }catch (error) {
        res.status(400).json(error);
    }
})
//SHOW
ratedogs.get('/:id', async (req, res) => {
    try{
        const showDog = await RateDog.findById(req.params.id);
        rest.status(200).json(showDog)
    } catch (error) {
        res.status(400).json(error);
    }
})
module.exports = ratedogs;