const express= require("express");
const Product= require("../Models/productsModel");

const router= express.Router();

router.post("/byrouter", async(req,res)=>{
    try {
        const products= await Product.create(req.body);
        
        return res.status(201).send(products);
    } catch (error) {
        return req.status(500).send(error.message);
    }
});

router.get("/all", async(req,res)=>{
    try {
        const products= await Product.find().lean().exec();

        return res.status(201).send(products);
    } catch (error) {
        return req.status(500).send(error.message);
    }
});

module.exports= router;