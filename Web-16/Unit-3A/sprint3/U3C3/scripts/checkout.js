// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

var pay = localStorage.getItem("amount");

let h1 = document.createElement("h1");
h1.innerText = pay;
h1.id = "wallet";

navbar.appendChild(h1);

function confirm() {
    let seats = document.getElementById("number_of_seats").value;
    let amount = JSON.parse(localStorage.getItem("amount"));
    amount = +amount
    if ((seats * 100) < amount) {
        alert("Booking successfull!");

        // let reduce = amount - (no * 100);
        // id.innerText = JSON.parse(localStorage.getItem("amount"))
        // localStorage.setItem("amount", JSON.stringify(reduce));
        // // id.innerText = amount

        let reduce = amount - (seats * 100);

        localStorage.setItem("amount", JSON.stringify(reduce));
        id.innerText = JSON.parse(localStorage.getItem("amount"));
        console.log("amount")

    }
    else {
        alert("Insufficient Balance!");
    }
}