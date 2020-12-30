const express = require('express');
const dogs = express.Router();
const Dog = require('../models/dogs');

//INDEX
dogs.get('/doggos', async (req, res) => {
    try {
        //get dogs from mongo
        const foundDogs = await Dog.find({});
        res.status(200).json(foundDogs);
    }catch(error) {
        res.status(400).json(error)
    }
});

//CREATE
dogs.post('/create', async (req, res) => {
    try{
        const createdDog = await Dog.create(req.body);
        res.status(200).json(createdDog)
    }catch(error) {
        res.status(400).json(error)
    }
});
//DELETE
dogs.delete('/doggos/:id', async (req, res) => {
    try{
        const deletedDog = await Dog.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedDog);
    } catch(error) {
        res.status(400).json(error)
    }
})
//UPDATE
dogs.put('/doggos/:id', async (req, res) => {
    try{
        const updatedDog = await Dog.findByIdAndUpdate(req.params.id);
        res.status(200).json(updatedDog);
    }catch (error) {
        res.status(400).json(error);
    }
})
//SHOW
dogs.get('/doggos', async (req, res) => {
    try{
        const showDog = await Dog.findById(req.params.id);
        rest.status(200).json(showDog)
    } catch (error) {
        res.status(400).json(error);
    }
})
module.exports = dogs;