//store the products array in localstorage as "products"

document.getElementById("submit").addEventListener("click",function(){
    var result = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        type: document.getElementById("type").value,
        image: document.getElementById("image").value,
    }
    localStorage.setItem("product",result)
});