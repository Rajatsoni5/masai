//store the products array in localstorage as "products"
document.getElementById("submit").addEventListener("click",function(){
    
    var get_data =  JSON.parse(localStorage.getItem("all_entry"))
    if(get_data == null){
        get_data = []
    }
    var result = {

        "name": document.getElementById("name").value,
        "price": document.getElementById("price").value,
        "type": document.getElementById("type").value,
        "image": document.getElementById("image").value,
    }
    localStorage.setItem("entry", JSON.stringify(result))
    console.log(get_data)
    get_data.push(result)

    localStorage.setItem("all_entry", JSON.stringify(get_data))
});

function show() {
    window.location.href = "./inventory.html"
}