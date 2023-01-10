const sql = require('../index');

// TRUNCATE AND POPULATE

let loadStoreData = async (data) => {
    console.log(data[0].id)
    
    new Promise((resolve, reject) => {
        let sqlQuery = `truncate fakestore;`;
        sql.query(sqlQuery, (err, result, field) => {
            if (err) return reject(err);
            console.log('Truncated table was successful')
            resolve(Object.values(("truncated the table")));
        })
    })
    .then(
        result => {
            console.log("Test")
            var inserts = [];
            for (let i = 0; i < data.length; i++) {

                id = data[i].id
                title = data[i].title
                price = data[i].price
                item_description = data[i].description //Question this aspect as the database name is differenct from the api
                category = data[i].category
                image = data[i].image

                inserts.push([id, title, price, item_description, category, image]);
            }
            new Promise((resolve, reject) =>{
                sql.query({
                    sql: 'INSERT INTO fakestore(id, title, price, item_description, category, image) VALUES?',
                    values: [inserts]
                }, (err, result, field) => {
                    if(err) return reject(err);
                    resolve("Data successfully loaded into table")
                })
            }).then(
                result => {
                    console.log("Database table successfully populated")
                }
            )
        },
        error => { console.log("error") })
    return "inserted data"
};

// CREATE NEW ENTRY

let createAnotherEntry = async(req, res)=>{
    let id = req.body.id
    let title = req.body.title
    let price = req.body.price
    let item_description = req.body.description
    let category = req.body.category
    let image = req.body.image
    return new Promise((resolve, reject)=>{
        let sqlQuery = `INSERT INTO fakestore SET id='${id}', title='${title}', price='${price}', item_description="${item_description}", category="${category}", image='${image}'`;
        sql.query(sqlQuery,(err, result, field)=>{
            if(err) return reject(err);
            resolve("New item created successfully")
        })
    })
};

// DELETE ENTRY BASED ON ID

let deleteItemViaId = async(req, res)=>{
    let id = req.params.id
    return new Promise((resolve, reject)=>{
        let sqlQuery = `DELETE FROM fakestore WHERE id = ${id}`;
        sql.query(sqlQuery, (err, result, field)=>{
            if(err) return reject(err);
            resolve("Item successfully deleted");
        })
    })
};

// UPDATES PRICE BASED ON ID SELECTED

let updatePrice = async (req, res)=>{
    let id = req.params.id
    let title = req.body.title
    let price = req.body.price
    let item_description = req.body.item_description
    let category = req.body.category
    let image = req.body.image
    return new Promise((resolve, reject)=>{
        // let sqlQuery = `UPDATE fakestore SET price = ${price} WHERE id = ${id}`;
        let sqlQuery = `UPDATE fakestore SET id='${id}', title='${title}', price=${price}, item_description="${item_description}", category="${category}", image='${image}' WHERE id = ${id}`;

        sql.query(sqlQuery, (err, result, field)=>{
            if(err) return reject(err);
            resolve("Successfully updated");
        })
    })
};

// SEARCH BY CATEGORY --SHOWS IN CONSOLE BUT HOW TO GET THIS TO SHOW ON POSTMAN?

let getCategory = async(req, res)=>{
    console.log(req.query.category)
    let categorySearch = req.query.category
    return new Promise((resolve, reject)=>{
        let sqlQuery = `SELECT * FROM fakestore WHERE category = "${categorySearch}"`;
        sql.query(sqlQuery, (err, result, field)=>{
            if(err) return reject (err);
            resolve(Object.values(JSON.parse(JSON.stringify(result))));
        })
    })
};

// SEARCH BY ITEM ID

let getItemById = async (req, res) =>{
    console.log(req.query.id)
    let itemSearch = req.query.id
    return new Promise((resolve, reject)=>{
        let sqlQuery = `SELECT * FROM fakestore WHERE id = ${itemSearch}`;
        sql.query(sqlQuery, (err, result, field)=>{
            if(err) return reject (err);
            resolve(Object.values(JSON.parse(JSON.stringify(result))))
        })
    })
};

// RETURNS ALL DATA IN DATABASE

let getFakestoreData = async (req, res)=>{
    console.log("Database services")
    return new Promise ((resolve, reject) =>{
        let sqlQuery = `SELECT * FROM fakestore`;
        sql.query(sqlQuery, (err, result, field)=>{
            if(err) return reject(err);
            resolve(Object.values(JSON.parse(JSON.stringify(result))))
        })
    })
};

module.exports = {
    loadStoreData,
    createAnotherEntry,
    deleteItemViaId,
    updatePrice,
    getCategory,
    getItemById,
    getFakestoreData
}