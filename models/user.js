var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");

var userSchema=new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    isAdmin:Boolean
});
userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",userSchema);