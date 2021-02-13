var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const session = require('express-session');
app.use(session({
    secret: 'my_secret_password',
    resave: false
}));

app.use((req, res, next) => {
    const loggedUser = req.session.loggedUser;
    res.locals.loggedUser = loggedUser;
    if(!res.locals.loginError) {
        res.locals.loginError = undefined;
    }
    next();
});

var indexRouter = require('./routes/index');
const locationRouter = require('./routes/locationRoute');
const employeeRouter = require('./routes/employeeRoute');
const repairRouter = require('./routes/repairRoute');
const repairServiceRouter = require('./routes/repairServiceRoute');
const vehicleRouter = require('./routes/vehicleRoute');
const serviceRouter = require('./routes/serviceRoute');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/locations', locationRouter);
app.use('/employees', employeeRouter);
app.use('/repairs', repairRouter);
app.use('/repairsServices', repairServiceRouter);
app.use('/vehicles', vehicleRouter);
app.use('/services', serviceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
    .catch(err => {
      console.log(err);
    });

module.exports = app;
