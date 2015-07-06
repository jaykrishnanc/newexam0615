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

var Schema = mongoose.Schema,
    userSchema = new Schema(
        {
            username:String,
            password:String
        }
    );

var  User = db.model('User', userSchema);

exports.getUsers=function(req,res){
    User.find({}).exec(function(err, collection) {
        res.send(collection);
    })};

exports.createUsers=function(req,res,next){

    User.create(req.body,function(err,user){
        if(err) {

            res.status(400);
            return res.send({reason:err.toString()});
        }
    });

};