let Products_Div=document.getElementById("Products_Div");
// https://blueflybackend.herokuapp.com/
// http://localhost:7492


let count_Casual=0;
let Casual= document.getElementById("Casual");
Casual.addEventListener("click", async()=>{
    count_Casual++;
    if(count_Casual%2 != 0){
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product?category=Casual`);
            let data= await response.json();
            console.log("data:",data);
            
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
    else{
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
            let data= await response.json();
            console.log("data:",data);
            
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
});

let count_Dress=0;
let Dress= document.getElementById("Dress");
Dress.addEventListener("click", async()=>{
    count_Dress++;
    if(count_Dress%2 != 0){
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product?category=Dress`);
            let data= await response.json();
            console.log("data:",data);
            
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
    else{
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
            let data= await response.json();
            console.log("data:",data);
            
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
});

let count_brand=0;
let Antonio= document.getElementById("Antonio");
Antonio.addEventListener("click", async()=>{
    count_brand++;
    if(count_brand%2 != 0){
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product?brand=Antonio`);
            let data= await response.json();
            console.log("data:",data);
            
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
    else{
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
            let data= await response.json();
            console.log("data:",data);
            
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
});

let count_BALENCIAGA=0;
let BALENCIAGA= document.getElementById("BALENCIAGA");
BALENCIAGA.addEventListener("click", async()=>{
    count_BALENCIAGA++;
    if(count_BALENCIAGA%2 != 0){
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product?brand=BALENCIAGA`);
            let data= await response.json();
            console.log("data:",data);
            
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
    else{
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
            let data= await response.json();
            console.log("data:",data);
            
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
});

let count_Black=0;
let Black= document.getElementById("Black");
Black.addEventListener("click", async()=>{
    count_Black++;
    if(count_Black%2 != 0){
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product?color=Black`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
    else{
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
});

let count_Gray=0;
let Gray= document.getElementById("Gray");
Gray.addEventListener("click", async()=>{
    count_Gray++;
    if(count_Gray%2 != 0){
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product?color=Gray`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
    else{
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
});

let count_Brown=0;
let Brown= document.getElementById("Brown");
Brown.addEventListener("click", async()=>{
    count_Brown++;
    if(count_Brown%2 != 0){
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product?color=Brown`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
    else{
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
});

let count_B=0;
let B= document.getElementById("B");
B.addEventListener("click", async()=>{
    count_B++;
    if(count_B%2 != 0){
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product?shoe_width=B`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
    else{
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
});

let count_C=0;
let C= document.getElementById("C");
C.addEventListener("click", async()=>{
    count_C++;
    if(count_C%2 != 0){
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product?shoe_width=C`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
    else{
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
});

let count_E=0;
let E= document.getElementById("E");
E.addEventListener("click", async()=>{
    count_E++;
    if(count_E%2 != 0){
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product?shoe_width=E`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
    else{
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
});

let count_New=0;
let New= document.getElementById("New");
New.addEventListener("click", async()=>{
    count_New++;
    if(count_New%2 != 0){
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product?product_condition=New`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
    else{
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
});

let count_Preowned=0;
let Preowned= document.getElementById("Preowned");
Preowned.addEventListener("click", async()=>{
    count_Preowned++;
    if(count_Preowned%2 != 0){
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product?product_condition=Preowned-Fair`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
    else{
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
});


let Price_Value= document.getElementById("Price_Value");
Price_Value.addEventListener("click", async()=>{
    let Low_Value= document.getElementById("Low_Value");
    // console.log(Low_Value.value);
    let low=0;
    if(Low_Value.value){
        low=Low_Value.value;
    }
    let High_Value= document.getElementById("High_Value");
    let high=1500;
    if(High_Value.value){
        high=High_Value.value;
    }
    try {
        let response = await fetch(`https://blueflybackend.herokuapp.com/product?pricelow=${low}&pricehigh=${high}`);
        let data= await response.json();
        console.log("data:",data);
        Product_show(data);
    } catch (error) {
        console.log("err:",err);
    }
});

let Price_Dis= document.getElementById("Price_Dis");
Price_Dis.addEventListener("click", async()=>{
    let Low_Dis= document.getElementById("Low_Dis");
    // console.log(Low_Dis.value);
    let low=0;
    if(Low_Dis.value){
        low=Low_Dis.value;
    }
    let High_Dis= document.getElementById("High_Dis");
    let high=1500;
    if(High_Dis.value){
        high=High_Dis.value;
    }
    try {
        let response = await fetch(`https://blueflybackend.herokuapp.com/product?discountlow=${low}&discounthigh=${high}`);
        let data= await response.json();
        console.log("data:",data);
        Product_show(data);
    } catch (error) {
        console.log("err:",err);
    }
});

let count_Trending=0;
let Trending= document.getElementById("Trending");
Trending.addEventListener("click", async()=>{
    count_Trending++;
    if(count_Trending%2 != 0){
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product?tag=Trending`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
    else{
        try{
            let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
            let data= await response.json();
            console.log("data:",data);
            Product_show(data);
        }
        catch(err){
            console.log("err:",err);
        }
    }
});

async function GetProducts(){
    try{
        let response = await fetch(`https://blueflybackend.herokuapp.com/product/all`);
        let data= await response.json();
        console.log("data:",data);
        
        Product_show(data);
    }
    catch(err){
        console.log("err:",err);
    }
}


let Clear_Filter=document.getElementById("Clear_Filter");
Clear_Filter.addEventListener("click", ()=>{
    location.reload();
});

function Product_show(prod_data){
    Products_Div.innerHTML=null;
    console.log(prod_data);
    prod_data.forEach(function(prod){
        let Greate= document.createElement("div");
        let Text_Div= document.createElement("div");
        
        let Img= document.createElement("img");
        Img.src= prod.Img_link[0];

        let brand= document.createElement("h3");
        brand.innerText= prod.Brand;
        brand.setAttribute("class", "brand_color");

        let description= document.createElement("h3");
        description.innerText= prod.Description;

        let ExPrice= document.createElement("span");
        // ExPrice.innerText= "$1100";
        ExPrice.innerText= ` $${Math.floor((Math.random() * (2000 - 1500 + 1)) + 1500)} `;
        ExPrice.setAttribute("class", "Price-line");

        let price= document.createElement("span");
        price.innerText= `$${prod.Price} `;
        price.setAttribute("class", "margin");

        let Save= document.createElement("span");
        Save.innerText= ` Save ${prod.Discount}%`;
        Save.setAttribute("class", "Red_Text");

        Text_Div.append(ExPrice, price, Save);

        Greate.append(Img,brand,description,Text_Div);
        

        Greate.addEventListener("click", ()=>{
            JSON.stringify(localStorage.setItem("Prod_Id", prod._id));
             window.location.href=`../HTML_Files/Single_Product_Page.html`;
        });

        // console.log(prod._id);

        Products_Div.append(Greate);
    });
}
GetProducts();