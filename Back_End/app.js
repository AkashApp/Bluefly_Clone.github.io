const express= require("express");
const Connect= require("./Configs/DbConnect.js");
const productContro= require("./Controllers/productController");
const cors= require("cors");
const app= express();

app.use(express.json());
app.use(cors());
app.use("/product", productContro);

app.listen(7492, async(req,res)=>{
    try {
        await Connect();
        console.log("Listening On Port 7492");
    } catch (error) {
        console.log(error.message);
    }
});