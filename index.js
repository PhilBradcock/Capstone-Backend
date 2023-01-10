let express = require("express");
let app = express();

const mysql = require('mysql');
const storeConfig = require('./Config/storeConfig');

const cors = require ('cors');

let port = 8080


app.use(express.json());

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.use(cors());

var connection = mysql.createPool({
    host: storeConfig.HOST,
    user: storeConfig.USER,
    password: storeConfig.PASSWORD,
    database: storeConfig.DB
  });

  module.exports = connection;

  let storeRoute = require ('./Routes/storeRoute')
  app.use('/fakestore', storeRoute)

  let userRoute = require ('./Routes/userRoute')
  app.use('/users', userRoute)

  app.listen(port,()=>{console.log(`Server running on http://localhost:${port}`)});