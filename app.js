// ds - dead-simple digital signage
// authored by Brandon Johnson
// license + add'l info: http://github.com/skylineproject/ds
//
// module declaration in Node
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var allowOnly = require('./allowOnly.js');
var hostname = require('os').hostname();

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(allowOnly(['127.0.0.1','localhost', /*hostname*/])); // uncomment hostname to allow other machines on your LAN to get in.

// emable routing with the routes folder enbled above
app.use('/', routes);

// ERROR HANDLERS
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// catch 500 and display a useful message about what went wrong
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


// listen on the port given by the environment variable (for use with a service like Heroku) or port 5000
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	  console.log("Listening on " + port);
	  console.log("Go to localhost:" + port + " to view a sign");
	  console.log("Or localhost:" + port + "/new to edit it");
});
module.exports = app;
