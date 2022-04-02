var stock = JSON.parse(localStorage.getItem("all_entry")) 

var product_details = document.getElementById("products_data");

function add() {
    window.location.href = "./index.html"
}

for(var j=0; j<stock.length; j++){
    
    const name1 = document.createElement("h4")
    name1.innerText = stock[j].name

    const image = document.createElement("img")
    image.src = stock[j].image

    const type = document.createElement("p")
    type.innerText = stock[j].type

    const price = document.createElement("p")
    price.innerText = stock[j].price

    const button = document.createElement("button")
    button.innerText = "Remove"
    button.className = "remove_data"

    const div = document.createElement("div")
    div.className = "product"

    button.addEventListener("click", function(event){
        let button = event.target
        button.parentNode.parentNode.removeChild(button.parentNode)
        
        // var local_data = localStorage.getItem("all_entry")

        // stock.splice(j,1)
        // localStorage.setItem("all_entry", JSON.stringify(stock))


    })
    div.append(name1,type,price,button)
    product_details.append(div)


}

console.log(product_details)
// const remove_data1 = document.getElementsByClassName("remove_data")
// console.log(remove_data1)

// for(var i=0; i<remove_data1.length; i++){
//     remove_data1[i].addEventListner("click", function(){
//         localStorage.removeItem("product")
//         console.log("removed")
//     })
    
// }



