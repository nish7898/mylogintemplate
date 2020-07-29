var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

module.exports = function(app,passport){
    app.use(cookieParser());
    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(session({
        secret: 'YourSecretKey', 
        resave: false,
        saveUninitialized: true,
        maxAge : 24*60*60*1000
    }));
    app.use(passport.initialize());
    app.use(passport.session()); 
}