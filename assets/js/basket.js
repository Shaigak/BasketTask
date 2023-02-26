"use strict"



let tableBody = document.querySelector("tbody");

let products = JSON.parse(localStorage.getItem("basket"));



if (products != null) {
    for (const product of products) {

        tableBody.innerHTML += `<tr>
        <td>
        <img src="${product.img}" alt="">
        </td>
        <td>${product.name}</td>
        
        <td>${product.description}</td>
        
        <td> <span class="plus">-</span> ${product.count} <span class="minus">+</span></td>
        
        <td >₼ ${product.pricec}</td>

        <td class=" idNum d-none">${product.id}</td>

        <td><i class="fa-solid fa-xmark item2"></i></td>

        </tr> `
    }
   
    
    let iconsDelete = document.querySelectorAll(".item2")

    let plus=document.querySelectorAll(".plus")

    let minus=document.querySelectorAll(".minus")

    let idNumber=document.querySelectorAll(".idNum")


    for (const item of plus) {

        item.addEventListener("click",function(){
            getCountPlus(products)
            window.location.reload()
            
        }) 
    }
    

    function getCountPlus(arr){

   
    for (const item of arr) {

        if(item.id==idNumber.innerText){
            
            item.count--;
        }    
    }
    localStorage.setItem("basket",JSON.stringify(products))  
    }

    
    for (const item of minus) {

        item.addEventListener("click",function(){
            getCountMinus(products)
            window.location.reload()
            
        }) 
    }
   
    function getCountMinus(arr){

        for (const item of products) {
            item.count++
        }
        localStorage.setItem("basket",JSON.stringify(arr))  


    }


   


    for (const item of iconsDelete) {
        item.addEventListener("click", function () {

            let arr = products.filter(m => m.id != Number(this.parentNode.previousElementSibling.innerText))

            localStorage.setItem("basket", JSON.stringify(arr))

            window.location.reload()

        })
    }

    getBasketCount(products)
    totalPrice(products);
} else {
    document.querySelector("table").classList.add("d-none")

    document.querySelector(".alert-warning").classList.remove("d-none")
}

function getBasketCount(arr) {

    let sum = 0

    for (const item of arr) {

        sum += item.count;

    }

    document.querySelector("sup").innerText = sum

}

getBasketCount(products)





function totalPrice(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += parseInt(item.pricec)*parseInt(item.count);
    }
    document.querySelector("h2").innerHTML = `<span> Total: ${sum} AZN </span>`;
}


