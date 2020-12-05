const express = require('express');
path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
 let port = process.env.PORT || 4000;
 const server = app.listen(function(){
     console.log('app is running on port ' + port);
 })