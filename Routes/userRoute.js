const express = require('express');
const router = express.Router();

const userController = require('../Controllers/userController');

// http://localhost:3000/users/create

router.get('/init', (req, res)=>{
    userController.populate(req, res)
});

router.get('/all',(req, res)=>{
    userController.getAllData(req, res)
});

module.exports = router