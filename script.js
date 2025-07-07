const bar =document.getElementById("Burger");
const navbar =document.getElementById("nav")

bar.addEventListener("click", () => {
navbar.classList.toggle("active");

})
const cartcount=document.querySelector(".cart-count")
const carticon =document.querySelector(".cart")
const sidebar =document.querySelector(".cartitems")
const closebtn =document.querySelector(".close-button")
const cartlist =document.querySelector(".cartitems ul")
const totalamount =document.querySelector(".total-items-cart span")

carticon.addEventListener("click", () =>{
sidebar.classList.toggle("active")
})

closebtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("active");
})

let items  =[
    {
        
        id:1,
        name:"Fries",
        Image:"images/food-2.png",
        price:2.00
    },
     {
        id:2,
        name:"Salad",
         Image:"images/food-3.png",
        price:3.00
    },
     {
        id:3,
        name:"Pasta",
         Image:"images/food-4.png",
        price:4.00
    },
     {
        id:4,
        name:"Burger",
         Image:"images/food-5.png",
        price:2.00
    },
];
 
var productbox =document.querySelector(".dishes")
let showitem = items.map((item,key)=>{
   
    return ` <div class="dish" >
            <img src="${item.Image}">
            <p>${item.name}</p>
            <span class="price">$${item.price.toFixed(2)}</span>
            <button class="add-to-cart" onClick="tocart(${key})">
                <i class="fas fa-plus"></i>
            </button>
        </div>`
      
}).join("")

productbox.innerHTML=showitem


let storeproduct = [];

function tocart(id){
    if(storeproduct[id]==null){
        storeproduct[id]=items[id]
        storeproduct[id].cartcount=1
    }
    else{
        storeproduct[id].cartcount += 1
    }
    reloadproduct()
}

function reloadproduct(){
    cartlist.innerHTML='';
let count=0;
let totalcount=0;

    storeproduct.forEach((item,key)=> {
        count += item.cartcount;
        totalcount+=item.price*item.cartcount;

let productli=document.createElement('li')
productli.innerHTML=`  <img src="${item.Image}">
              <p>${item.name}</p>
            <span class="price">$${item.price}</span>
            <div class="changeqty">
                <button onClick="changecount(${key},${item.cartcount - 1})">-</button>
                <span>${item.cartcount}</span>
                <button onClick="changecount(${key},${item.cartcount + 1})">+</button>
            </div>`
            cartlist.append(productli)

    })
    cartcount.style.display="block"
    cartcount.innerHTML=count;
    totalamount.innerHTML= +totalcount
}

function changecount(key,cartcount) {
if( cartcount==0){
    delete storeproduct[key]
}
else{
    storeproduct[key].cartcount=cartcount
}
reloadproduct()
}


