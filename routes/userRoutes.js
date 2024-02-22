const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const {jwtAuthMiddleware,generateToken} = require('./../jwt');

//POST route to add a person
router.post('/signup', async (req,res) => {
    try{
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');

        const payload = {
            id: response.id,
            username: response.username
        }
        console.log(JSON.stringify(payload));
        const token = generateToken(payload);
        console.log("Token is :",token);
    }
})