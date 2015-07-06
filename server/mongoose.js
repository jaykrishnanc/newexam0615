/**
 * Created by JAYA on 05-07-2015.
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tcilit');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("Database TCIL-IT started");
});