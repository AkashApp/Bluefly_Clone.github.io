let Get_Pro= localStorage.getItem("Pro");

async function GetProd(Single){
    try{
        let response = await fetch(`https://blueflybackend.herokuapp.com/product?id=${Single}`);
        let data= await response.json();
        console.log("data:",data);
        
        Product_show(data);
    }
    catch(err){
        console.log("err:",err);
    }
}

let Cart_Main= document.getElementById("Cart_Main");
let CheckOut= document.getElementById("CheckOut");

function Product_show(prod_data){
    prod_data.forEach(function(prod){
        let Div= document.createElement("div");
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

        Div.append(Img,brand,description,Text_Div);

        let but= document.createElement("button");
        but.innerText= "CHECK OUT";
        but.addEventListener("click", ()=>{
            JSON.stringify(localStorage.setItem("Cart_Id", prod._id));
             window.location.href=`../HTML_Files/Information_Page.html`;
        });

        // console.log(prod._id);

        Cart_Main.append(Div);
        CheckOut.append(but);
    });
}

// for(let i=0; i<Get_Pro.length; i++){
//     GetProd(Get_Pro[i]);
// }
GetProd(Get_Pro);
