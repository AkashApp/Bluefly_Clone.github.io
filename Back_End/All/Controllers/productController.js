const express= require("express");
const Product= require("../Models/productsModel");

const router= express.Router();

router.post("/byrouter", async(req,res)=>{
    try {
        const products= await Product.create(req.body);
        
        return res.status(201).send(products);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get("/all", async(req,res)=>{
    try {
        const products= await Product.find().lean().exec();

        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get("", async(req,res)=>{
    try {
        let products;
        if(req.query.category){
            products= await Product.find({Category:{$eq: req.query.category}}).lean().exec();
        }
        if(req.query.brand){
            products= await Product.find({Brand:{$eq: req.query.brand}}).lean().exec();
        }
        if(req.query.color){
            products= await Product.find({Color:{$eq: req.query.color}}).lean().exec();
        }
        if(req.query.heel_height){
            products= await Product.find({Heel_Height:{$eq: req.query.heel_height}}).lean().exec();
        }
        if(req.query.shoe_width){
            products= await Product.find({Shoe_Width:{$eq: req.query.shoe_width}}).lean().exec();
        }
        if(req.query.product_condition){
            products= await Product.find({Product_Condition:{$eq: req.query.product_condition}}).lean().exec();
        }
        if((req.query.pricelow)&&(req.query.pricehigh)){
            products= await Product.find({$and:[{Price:{$gte:req.query.pricelow}},{Price:{$lte:req.query.pricehigh}}]}).lean().exec();
        }
        if((req.query.discountlow)&&(req.query.discounthigh)){
            products= await Product.find({$and:[{Discount:{$gte:req.query.discountlow}},{Discount:{$lte:req.query.discounthigh}}]}).lean().exec();
        }
        if(req.query.tag){
            products= await Product.find({Tag:{$eq: req.query.tag}}).lean().exec();
        }
        if(req.query.id){
            products= await Product.find({_id:{$eq: req.query.id}}).lean().exec();
        }

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports= router;