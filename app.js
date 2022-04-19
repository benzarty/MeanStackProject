var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');
const http = require('http');


var usersRouter = require('./routes/Students');


var app = express();
app.use(express.static(path.join(__dirname, 'public')));


const server = http.createServer(app);

connectDB();

// view engine setup
 app.use(cors());

app.use(logger('dev'));
app.use(express.json({ extended: false }));
//app.use(express.urlencoded({ extended: true }));  //fil postman form urlencoded yenajem ya9raha yawali
app.use(cookieParser());

app.use('/users', usersRouter);


server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started on.`)
);

