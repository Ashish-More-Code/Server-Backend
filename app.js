const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors= require('cors');

app.use(cors());
app.options('*',cors());

//middleware
app.use(bodyParser.json());
require('dotenv/config');
const api = process.env.API_URL;

// for router importing from routers folder
const productsRouter = require('./routers/product');


//roters 
app.use(`${api}/products`, productsRouter)

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "customers",
  })
  .then(() => {
    console.log("database connection is ready");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, function () {
  console.log("Express listening on port", this.address().port);
});
