/**
 * Created by JAYA on 05-07-2015.
 */
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