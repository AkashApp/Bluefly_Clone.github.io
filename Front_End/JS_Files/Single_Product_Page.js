let Single= localStorage.getItem("Prod_Id");

let Pro_Id= localStorage.getItem("Pro") || [];

let Prod_Details= document.getElementById("Prod_Details");

function Single_show(prod_data){
    prod_data.forEach(function(prod){
        let Small_Img= document.createElement("div");
        Small_Img.setAttribute("id", "Small_Img");

        let Text_Detail= document.createElement("div");
        Text_Detail.setAttribute("id", "Text_Detail");

        // -------------------------------------------
        let Big_Div= document.createElement("div");
        Big_Div.setAttribute("id", "Big_Div");

        let Img_Big= document.createElement("img");
        Img_Big.src= prod.Img_link[0];

        Big_Div.append(Img_Big);
        // -----------------------

        let div_I1= document.createElement("div");
        let Img1= document.createElement("img");
        let Img1B= document.createElement("img");

        let div_I2= document.createElement("div");
        let Img2= document.createElement("img");
        let Img2B= document.createElement("img");

        let div_I3= document.createElement("div");
        let Img3= document.createElement("img");
        let Img3B= document.createElement("img");

        let div_I4= document.createElement("div");
        let Img4= document.createElement("img");
        let Img4B= document.createElement("img");

        let div_I5= document.createElement("div");
        let Img5= document.createElement("img");
        let Img5B= document.createElement("img");

        let Len= prod.Img_link.length;
        // --------------------------------------------
        if(Len ==1){
            Img1.src= prod.Img_link[0];
            Img1B.src= prod.Img_link[0];
            div_I1.append(Img1);
            Small_Img.append(div_I1)
        }
        // ----------------------
        else if(Len ==2){
            Img1.src= prod.Img_link[0];
            Img1B.src= prod.Img_link[0];
            div_I1.append(Img1);
            Img2.src= prod.Img_link[1];
            Img2B.src= prod.Img_link[1];
            div_I2.append(Img2);
            Small_Img.append(div_I1, div_I2);
        }
        // ------------------------
        else if(Len ==3){
            Img1.src= prod.Img_link[0];
            Img1B.src= prod.Img_link[0];
            div_I1.append(Img1);
            Img2.src= prod.Img_link[1];
            Img2B.src= prod.Img_link[1];
            div_I2.append(Img2);
            Img3.src= prod.Img_link[2];
            Img3B.src= prod.Img_link[2];
            div_I3.append(Img3);
            Small_Img.append(div_I1, div_I2,div_I3);
        }
        // ------------------------
        else if(Len ==4){
            Img1.src= prod.Img_link[0];
            Img1B.src= prod.Img_link[0];
            div_I1.append(Img1);
            Img2.src= prod.Img_link[1];
            Img2B.src= prod.Img_link[1];
            div_I2.append(Img2);
            Img3.src= prod.Img_link[2];
            Img3B.src= prod.Img_link[2];
            div_I3.append(Img3);
            Img4.src= prod.Img_link[3];
            Img4B.src= prod.Img_link[3];
            div_I4.append(Img4);
            Small_Img.append(div_I1, div_I2,div_I3,div_I4);
        }
        // ------------------------
        else if(Len ==5){
            Img1.src= prod.Img_link[0];
            Img1B.src= prod.Img_link[0];
            div_I1.append(Img1);
            Img2.src= prod.Img_link[1];
            Img2B.src= prod.Img_link[1];
            div_I2.append(Img2);
            Img3.src= prod.Img_link[2];
            Img3B.src= prod.Img_link[2];
            div_I3.append(Img3);
            Img4B.src= prod.Img_link[3];
            Img4B.src= prod.Img_link[3];
            div_I4.append(Img4);
            Img5.src= prod.Img_link[4];
            Img5B.src= prod.Img_link[3];
            div_I5.append(Img5);
            Small_Img.append(div_I1, div_I2,div_I3,div_I4,div_I5);
        }

        // -------------------------------------------------------
        Img1.addEventListener("click", ()=>{
            Big_Div.innerHTML=null;
            Big_Div.append(Img1B);
        });
        // -------------------------------------------------------
        Img2.addEventListener("click", ()=>{
            Big_Div.innerHTML=null;
            Big_Div.append(Img2B);
        });
        // -------------------------------------------------------
        Img3.addEventListener("click", ()=>{
            Big_Div.innerHTML=null;
            Big_Div.append(Img3B);
        });
        // -------------------------------------------------------
        Img4.addEventListener("click", ()=>{
            Big_Div.innerHTML=null;
            Big_Div.append(Img4B);
        });
        // -------------------------------------------------------
        Img5.addEventListener("click", ()=>{
            Big_Div.innerHTML=null;
            Big_Div.append(Img5B);
        });
// ----------------------------------------------------------------------------------------------------

        let detail_Div= document.createElement("div");
        detail_Div.setAttribute("id", "detail_Div")

        let Brand_P= document.createElement("p");
        Brand_P.innerText= prod.Brand;
        Brand_P.setAttribute("id", "Brand_P")

        let Des_P= document.createElement("p");
        Des_P.innerText= prod.Description;
        Des_P.setAttribute("id", "Des_P");

        let Text_Div= document.createElement("div");

        let ExPrice= document.createElement("span");
        ExPrice.innerText= ` $${Math.floor((Math.random() * (2000 - 1500 + 1)) + 1500)} `;
        ExPrice.setAttribute("class", "Price-line");

        let price= document.createElement("span");
        price.innerText= `$${prod.Price} `;
        price.setAttribute("class", "margin");

        let Save= document.createElement("span");
        Save.innerText= ` Save ${prod.Discount}%`;
        Save.setAttribute("class", "Red_Text");

        Text_Div.append(ExPrice, price, Save);

        let free_div= document.createElement("div");
        free_div.innerText= "FREE SHIPPING ON ORDERS OVER $99";

        detail_Div.append(Brand_P, Des_P, Text_Div, free_div);
        // -------------

        let S_Div= document.createElement("div");
        S_Div.setAttribute("id", "S_Div");

        let size_P= document.createElement("p");
        size_P.innerText= "Size";
        size_P.setAttribute("id", "size_P");

        let size_text= document.createElement("p");
        size_text.innerText= "(Please reference our size and conversion guide for proper sizing.)";

        let size_Div= document.createElement("div");
        size_Div.setAttribute("id", "size_Div");

        let S1= document.createElement("div");
        S1.innerText="5";
        S1.setAttribute("class", "S1");
        let S2= document.createElement("div");
        S2.innerText="6";
        S2.setAttribute("class", "S1");
        let S3= document.createElement("div");
        S3.innerText="7";
        S3.setAttribute("class", "S1");
        let S4= document.createElement("div");
        S4.innerText="8";
        S4.setAttribute("class", "S1");
        let S5= document.createElement("div");
        S5.innerText="9";
        S5.setAttribute("class", "S1");
        let S6= document.createElement("div");
        S6.innerText="10";
        S6.setAttribute("class", "S1");

        size_Div.append(S1,S2,S3,S4,S5,S6);

        S_Div.append(size_P, size_text, size_Div);
        // ----------

        let color_div= document.createElement("div");
        color_div.innerText= `Color- ${prod.Color}`;
        color_div.setAttribute("id", "color_Div");

        let cart_button= document.createElement("button");
        cart_button.innerText= "ADD TO CART";
        cart_button.setAttribute("id", "cart_button");
        cart_button.addEventListener("click", ()=>{
            Pro_Id.push(prod._id);
        });

        let Go_cart_button= document.createElement("button");
        Go_cart_button.innerText= "GO TO CART";
        Go_cart_button.setAttribute("id", "Go_cart_button");
        Go_cart_button.addEventListener("click", ()=>{
            JSON.stringify(localStorage.setItem("Pro", Pro_Id));
            window.location.href=`../HTML_Files/Cart_Page.html`;
        });

        let Some_Text= document.createElement("div");
        Some_Text.setAttribute("id", "Some_Text");

        let Ul= document.createElement("ul");
        Ul.innerText= "Usually ships in 1 to 2 business days";
        let li1=document.createElement("li");
        li1.innerText="About The Brand: The Gancini, The Vara, And All The Icons In-Between.";
        let li2=document.createElement("li");
        li2.innerText="Please Note: Size Selections Are Uk. For Us Conversions, Please Reference Size Chart.";
        let li3=document.createElement("li");
        li3.innerText="Please Note: Size Selections With An Ee Indicate Wide Sizing; Eee Indicates Extra Wide Sizing.";
        let li4=document.createElement("li");
        li4.innerText="Made In Italy";
        let li5=document.createElement("li");
        li5.innerText="Number Leather Sneaker In White And Black Leather With Gancini Print";
        let li6=document.createElement("li");
        li6.innerText="Lace-Up Closure";
        let li7=document.createElement("li");
        li7.innerText="Lightly Padded Insole";
        let li8=document.createElement("li");
        li8.innerText="Rubber Sole With Traction";
        let li9=document.createElement("li");
        li9.innerText="Our Products Are 100% Genuine. In Some Cases We Purchase Merchandise From Trusted Independent Suppliers And Not Directly From The Brand Owner. In All Cases We Stand By The Authenticity Of Every Product Sold On Our Site.";
        let li10=document.createElement("li");
        li10.innerText="SKU: BF-103667760-D9CS";

        Some_Text.append(Ul,li1,li2,li3,li4,li5,li6,li7,li8,li9,li10);

        let Share= document.createElement("h3");
        Share.innerText= "SHARE";
        

        Text_Detail.append(detail_Div,S_Div,color_div,cart_button,Go_cart_button,Some_Text,Share);

        Prod_Details.append(Small_Img,Big_Div,Text_Detail);
    });
}


async function Get_Single(Single){
    try{
        let response = await fetch(`https://blueflybackend.herokuapp.com/product?id=${Single}`);
        let data= await response.json();
        console.log("data:",data);
        
        Single_show(data);
    }
    catch(err){
        console.log("err:",err);
    }
}

Get_Single(Single);
