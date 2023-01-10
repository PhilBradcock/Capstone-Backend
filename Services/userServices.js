const sql = require('../index');

// RETURNS ALL USERS IN DATABASE

let getUserData = async (req, res)=>{
    console.log("Database services")
    return new Promise ((resolve, reject) =>{
        let sqlQuery = `SELECT * FROM users`;
        sql.query(sqlQuery, (err, result, field)=>{
            if(err) return reject(err);
            resolve(Object.values(JSON.parse(JSON.stringify(result))))
        })
    })
};

module.exports = {getUserData}