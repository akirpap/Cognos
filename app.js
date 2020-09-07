const morgan = require('morgan');
var querystring = require('querystring');
var http = require('http');
var fs = require('fs');
const express = require ('express');
const app = express ();


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.use(require('./router'));
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

