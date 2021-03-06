var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");

var productSchema=new mongoose.Schema({
    productid:String,
    productname:String,
    description:String,
    productimage1:String,
    productimage2:String,
    productimage3:String,
    productimage4:String,
    productimage5:String,
    vendorid:String,
    stockavailable:String,
    rating:String,
    price:String,
    categoryid:String
});
productSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Product",productSchema);