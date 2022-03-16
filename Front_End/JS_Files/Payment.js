let Product_Info= document.getElementById("Product_Info");

let Get_Pro= localStorage.getItem("Cart_Id");

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

function Product_show(prod_data){
    prod_data.forEach(function(prod){
        let Div= document.createElement("div");
        Div.setAttribute("id", "Div");
        
        let Img= document.createElement("img");
        Img.src= prod.Img_link[0];

        let brand= document.createElement("h3");
        brand.innerText= prod.Brand;
        brand.setAttribute("class", "brand_color");

        let description= document.createElement("h3");
        description.innerText= prod.Description;

        let price= document.createElement("span");
        price.innerText= `$${prod.Price} `;
        price.setAttribute("class", "margin");

        Div.append(Img,brand,description,price);

        let But= document.getElementById("continue");
        But.addEventListener("click", ()=>{
            alert("Thank you for shopping");
            window.location.href=`../../index.html`;
        })

        Product_Info.append(Div);
    });
}

GetProd(Get_Pro);