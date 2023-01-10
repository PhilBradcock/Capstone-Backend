let storeServices = require('../Services/storeServices');
let storeMiddleware = require ('../Middleware/storeMiddleware');

// POPULATE DATABASE

const populateDatabase = async(req,res)=>{
    let data = await storeMiddleware.fetchProductData(req, res)
    let result = await storeServices.loadStoreData (data)
    res.send("Data successfully loaded into database")
};

// CREATE NEW ENTRY

const createNewEntry = async (req, res)=>{
    let data = await storeServices.createAnotherEntry(req, res)
    console.log(data)
    res.send(data)
};

// DELETE ITEM BY ID

const deleteItemById = async (req, res)=>{
    let data = await storeServices.deleteItemViaId(req, res)
    console.log(data)
    res.send(data)
};

// UPDATES PRICE BASED ON ID SELECTED

const updateItemPrice = async (req, res)=>{
    console.log("test")
    let data = await storeServices.updatePrice(req, res)
    console.log(data)
    res.send(data)
};

// SEARCH BY CATEGORY

const returnCategories = async(req,res)=>{
    let data = await storeServices.getCategory(req, res)
    console.log(data)
    res.send(data)
};

// GET ITEM BY ID

const getItemViaId = async(req,res)=>{
    let data = await storeServices.getItemById(req, res)
    console.log(data)
    res.send(data)
};

// RETURNS ALL DATA IN DATABASE

const getAllData = async (req,res)=>{
    let data = await storeServices.getFakestoreData(req, res)
    console.log(data)
    res.send(data)
};

module.exports = {
    populateDatabase,
    createNewEntry,
    deleteItemById,
    updateItemPrice,
    returnCategories,
    getItemViaId,
    getAllData

}