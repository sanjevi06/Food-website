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
    {
        id:5,
        name:"Pizza",
        Image:"images/food-6 (2).png",
        price:3.00
    },
     {
        id:6,
        name:"wing",
        Image:"images/food-7.png",
        price:3.00
    },
    {
        id:7,
        name:"Briyani",
        Image:"images/food-8.png",
        price:2.00
    },
      {
        id:8,
        name:"Meal",
        Image:"images/food-9.png",
        price:3.00
    },
      {
        id:9,
        name:"BurgerCombo",
        Image:"images/food-10.png",
        price:3.00
    },
      {
        id:10,
        name:"Pizza",
        Image:"images/food-11.png",
        price:2.00
    },
     {
        id:11,
        name:"Noodles",
        Image:"images/food-12.png",
        price:2.00
    },

         {
        id:12,
        name:"Sushi",
        Image:"images/food-13.png",
        price:4.00
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
                <button class="delete-items" onClick="deleteall(${key})"><i class="fa-solid fa-square-minus"></i></button>
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
 function deleteall(key){
        delete storeproduct[key];
        reloadproduct()
    }

//login page
var auth =document.querySelector (".auth")
var signin =document.querySelector(".btn")//signin button
var closelogin =document.querySelector(".closelogin")//close button in auth

var loginlink =document.querySelector(".login-link")
var reglink =document.querySelector(".reg-link") 

// //increase the height of the box by .slide class
reglink.addEventListener("click", () =>{
    auth.classList.add("slide");
})
loginlink.addEventListener("click", () => {auth.classList.remove("slide")})

// //to show the login page by .open class

signin.addEventListener("click", () =>{
    auth.classList.add("open");
})
    closelogin.addEventListener("click",()=>{
    auth.classList.remove("open","slide")
})


// // //alert
var loginbutton =document.querySelector(".loginbtn") //login button in auth
var alertbox =document.getElementById("succ") //alert checkbox


//to show the alert when the validation is crct
loginbutton.addEventListener("click", ()=>{
 if(validationLogin()){
alertbox.classList.add("showit")
setTimeout(() =>{
    alertbox.classList.remove("showit")
},3000)
 }
})

// //reg not yet done


//to show logout button selecting it
var logoutbtn=document.getElementById("logout")

// //for closing auth after login and change singin to logout
loginbutton.addEventListener("click",()=>{
    if(validationLogin()){
    auth.classList.toggle("open")
        // logoutbtn.classList.toggle("logoutshow")
     logoutbtn.style.display=("block")
        // signin.classList.toggle("logoutshows")
          signin.style.display=("none")
        
}

})

//logout to sign in
function signout(){
    signin.style.display=("block");
    logoutbtn.style.display=("none")
    //to refresh the page  
    location.reload()
}

//Validation part for login
var loginform=document.querySelector("#loginform")
var regform=document.querySelector("#regform")
var email=document.querySelector("#email")
var password=document.querySelector("#password")

loginform.addEventListener("submit",(e)=>{
   //til validation is crct it will not allow to perform action
    if(!validationLogin()){
 e.preventDefault()
    }
})

function validationLogin(){
    emailvalue = email.value;
    passwordval = password.value;
  
    
    
let crct =true
    if(emailvalue===''){
        crct=false
        seterror(email,'Email is required')
    }
    else{
        setsuccess(email)
    }

    if(passwordval=== ''){
         crct=false
        seterror(password,'Password is required')
    }
    else{
        setsuccess(password)
    }


    return crct
}
// validation for register
var username=document.querySelector("#username")
var emailreg =document.querySelector("#emailreg")
var passwordreg =document.querySelector("#passwordreg")

regform.addEventListener("submit",(e)=>{
   //til validation is crct it will not allow to perform action
    if(!validationReg()){
 e.preventDefault()
    }
})

function validationReg(){
  usernameval=username.value.trim();
    emailregval=emailreg.value;
    passwordregval=passwordreg.value;

    let crct =true

    
    if(usernameval== ''){
        crct=false
        seterror(username,"username is required")
    }
    else{
        setsuccess(username)
    }
if(emailregval== ''){
    seterror(emailreg,"email is required")
}
else{
    setsuccess(emailreg)
}

if(passwordregval== ''){
    seterror(passwordreg,'password is required')
}
else{
    setsuccess(passwordreg)
}
return crct
}

function seterror(element,message){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector(".error")
    errorelement.innerText=message;
    inputgroup.classList.add("error")
    inputgroup.classList.remove("success")
    

}


function setsuccess(element){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector(".error")
    errorelement.innerText='';
    inputgroup.classList.add("success")
    inputgroup.classList.remove("error")

}

var regbtn =document.querySelector(".regbtn")
var alertboxreg=document.querySelector("#regsucc")


//when clicking register button in regform
function clickreg(){
     if(validationReg()){

auth.classList.remove("open","slide")
 alertboxreg.classList.add("showiti")
 setTimeout(() =>{
    alertboxreg.classList.remove("showiti")
},3000)
 
     }
    
}