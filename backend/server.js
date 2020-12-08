const express = require('express');
path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoute = require('./routes/products.route');
const app = express();
const config = require('./db');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true, useUnifiedTopology:true}).then(
    ()=>{
        console.log('connected to database successfully'),
        err=>{
            console.log("error occured while connecting to database",err)
        }
    }
);

app.use(bodyParser.json());
app.use(cors());
app.use('/products',productRoute);
 let port = process.env.PORT ||8080;
 const server = app.listen(port,function(){
     console.log('app is running on port ' + port);
 })