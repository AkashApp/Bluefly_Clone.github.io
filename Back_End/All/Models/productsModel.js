const mongoose= require("mongoose");

const ProductSchema= new mongoose.Schema({
    Type:{type:String, required:true},
    Sub_Type:{type:String, required:true},
    Category:{type:String, required:true},
    Brand:{type:String, required:true},
    Color:{type:String, required:true},
    Heel_Height:{type:String, required:true},
    Shoe_Width:{type:String, required:true},
    Product_Condition:{type:String, required:true},
    Price:{type:Number, required:true},
    Date:{type:Date, required:false},
    Discount:{type:Number, required:false},
    Tag:{type:String, required:true},
    Img_link:[{type:String, required:true}],
    Description:{type:String, required:true},
},
{
    versionKey:false,
    timestamps:true
});

module.exports= new mongoose.model("product", ProductSchema);