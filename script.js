const himage =document.querySelector("#himg img");
const dishes =document.querySelectorAll(".dish");
const cartcount =document.querySelector(".cart-count");
const addtocart =document.querySelectorAll(".add-to-cart");
const bar =document.getElementById("Burger");
const navbar =document.getElementById("nav")
let cart =[];


dishes.forEach(dish =>{
    dish.addEventListener("click", () => {
        const newimg =dish.getAttribute("data-img");
        himage.src =newimg;
        

    })
})

bar.addEventListener("click", () => {
navbar.classList.toggle("active");

})


addtocart.forEach(button => {
    button.addEventListener("click" , (e)=>{
        e.stopImmediatePropagation();
        const name =button.getAttribute("data-name")
        const price =parseFloat(button.getAttribute("data-price"))
        cart.push({name,price});
        updatecartcount();
    })
})

function updatecartcount (){
cartcount.textContent=cart.length;

}

