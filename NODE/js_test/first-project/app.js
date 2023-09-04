var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const templateRouter = require('./routes/template');

const session = require("express-session");

var app = express();

app.use(
  session({
    secret: "first project", // 세션을 암호화하기 위해 필요한 값. 속성값은 임의로 작성해도 된다.
    resave: false, // 세션을 변경하지 않아도 저장할지 말지 저장하는 값
    saveUninitialized: true, // 세션이 저장되기 전에 초기화 해줄지 말지 정해주는 값
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   console.log("middleware!");
//   next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/template', templateRouter);

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

module.exports = app;
