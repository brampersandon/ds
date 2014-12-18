var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var allowOnly = require('./allowOnly.js');
var hostname = require('os').hostname()

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
app.use(allowOnly(['localhost', '127.0.0.1'/*,hostname*/])) // << UNCOMMENT ',hostname' if you'd like computers other than the server to use this.

app.use('/', routes);
app.use('/new', routes);
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var port = Number(process.env.PORT || 8080);
app.listen(port, function() {
	  console.log("Listening on " + port);
	  console.log("Go to localhost:" + port + " to view a sign");
	  console.log("Or localhost:" + port + "/new to edit it");
});
module.exports = app;
