//store the products array in localstorage as "products"

document.getElementById("formID").addEventListener("submit", getdata) 

let arr = JSON.parse(localStorage.getItem("products"))||[]

function getdata()  {

    let form = document.getElementById("formID");

    let name = form.name.value;
    let price = form.price.value;
    let brand = form.brand.value;
    let image = form.image.value;

    let p1 = new CheckData(name,price,brand,image);

    arr.push(p1);

    localStorage.setItem("products", JSON.stringify(arr))
}

function CheckData(n,p,b,i) {
    this.name = n;
    this.price = p;
    this.brand = b;
    this.image = i;
};


function show() {
    window.location.href = "./inventory.html"
}
