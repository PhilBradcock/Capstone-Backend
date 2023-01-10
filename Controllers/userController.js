let userServices = require ('../Services/userServices')
let userMiddleware = require ('../Middleware/userMiddleware');

// CREATE NEW USER

const populate = (req, res)=>{
    let data = userMiddleware.insertUsers(req, res)
    console.log(data)
    res.send(data)
};

const getAllData = async (req,res)=>{
    let data = await userServices.getUserData(req, res)
    console.log(data)
    res.send(data)
};

module.exports = {
    populate,
    getAllData
   

}