/**
 * Created by JAYA on 28-06-2015.
 */
var express = require('express'),
    app = express();

var passport = require('passport'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session');





app.use(express.static(__dirname+'/public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({resave: false,
    saveUninitialized: true,
    secret: 'Exam Secret Key' }));
app.use(passport.initialize());
app.use(passport.session());

var user=require('./server/mongoose');

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/#/exam');
    });

app.listen(2000,function(){
    console.log("Exam Portal Started on Port:2000")
});
