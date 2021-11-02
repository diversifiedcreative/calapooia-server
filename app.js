var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const config = require('./config');

//default route inclusions
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//my route inclusions
const recSiteRouter = require('./routes/recSiteRouter');
const routeRouter = require('./routes/routeRouter');
const tripReportRouter = require('./routes/tripReportRouter');
const userRouteRouter = require('./routes/userRouteRouter');
const userRecSiteRouter = require('./routes/userRecSiteRouter');

const mongoose = require('mongoose');

const url = config.mongoUrl;
// const connect = mongoose.connect(url, {
// 	useCreateIndex: true,
// 	useFindAndModify: false,
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

const connect = mongoose.connect(url);

connect.then(() => console.log('Connected correctly to server'),
    err => console.log(err)
);

var app = express();

// Secure traffic only
app.all('*', (req, res, next) => {
    if (req.secure) {
        return next();
    } else {
        console.log(`Redirecting to: https://${req.hostname}:${app.get('secPort')}${req.url}`);
        res.redirect(301, `https://${req.hostname}:${app.get('secPort')}${req.url}`);
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); //changed from 'jade' to 'pug'

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//default Router inclusions
app.use('/', indexRouter);
app.use('/users', usersRouter);

//my Router inclusions
app.use(express.static(path.join(__dirname, 'public')));

app.use('/recsites', recSiteRouter);
app.use('/routes', routeRouter);
app.use('/tripreports', tripReportRouter);
app.use('/userroutes', userRouteRouter);
app.use('/userrecsites', userRecSiteRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
