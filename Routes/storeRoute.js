const express = require('express');
const router = express.Router();

const storeController = require('../Controllers/storeController');

// http://localhost:3000/fakestore/populate

router.get('/populate',(req,res) =>{
    storeController.populateDatabase(req,res)
});
 
// http://localhost:3000/fakestore/create

router.post('/create', (req, res)=>{
    storeController.createNewEntry(req, res)
});

// http://localhost:3000/fakestore/delete/

router.delete('/delete/:id', (req, res)=>{
    storeController.deleteItemById(req, res)
});

// http://localhost:3000/fakestore/update/

router.put('/update/:id',(req, res)=>{
    storeController.updateItemPrice(req, res)
});

// http://localhost:3000/fakestore/categories?

router.get('/categories', (req, res)=>{
    storeController.returnCategories(req, res)
});

// http://localhost:3000/fakestore/item?

router.get('/item', (req, res) =>{
    storeController.getItemViaId(req, res)
});

// http://localhost:3000/fakestore/all

router.get('/all',(req, res)=>{
    storeController.getAllData(req, res)
});

module.exports = router