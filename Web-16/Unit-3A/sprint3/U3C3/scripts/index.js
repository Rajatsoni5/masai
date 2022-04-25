// Store the wallet amount to your local storage with key "amount"


function addit() {

    var amount = document.getElementById("amount").value;

    var h1 = document.createElement("h1");
    h1.innerText = amount;
    h1.id = "wallet";

    navbar.appendChild(h1);

    localStorage.setItem("amount", amount)

};

document.getElementById("book_movies").addEventListener("click", function(){

    window.location.href = "movies.html"
})