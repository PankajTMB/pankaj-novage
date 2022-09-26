const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const Schema =  mongoose.Schema;

const UserSchema = new Schema({
    userName :  String,
    email : String,
    password : String,
    token : String,
    status : Boolean
});


UserSchema.pre('save', function(next) {
    let userData = this;
    bcrypt.hash(userData.password,Number(process.env.PASSWORD_HASH), function(err, hash) {
        if(err){ return next("Hash Error")}
        userData.password = hash;
        return next();
    });
});

const User =  mongoose.models.user || mongoose.model("user",UserSchema);
export default User;