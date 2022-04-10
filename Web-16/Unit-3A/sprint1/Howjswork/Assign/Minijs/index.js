//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
const scopeShow = document.getElementsByClassName("scopeshow");

let scopeobj = {
    point1: "The scope manages the availability of variables",
    point2: "It has Differnt type of Scopes like:",
    point3: "Global Scope can be use anywhere in code.",
    point4: "However, functional scope can only use inside function.",
    point5: "It has also Block scope as well"
}

function scope() {
    
    let ulElement = document.createElement("ul");
    ulElement.className = "point"

    // save points in localstorage
    localStorage.setItem("scope", JSON.stringify(scopeobj))
    
    // get poits by the key
    let result = JSON.parse(localStorage.getItem("scope"))

    for(const detail in result){
       let liElement = document.createElement("li");
       liElement.className = "scopeElement"
       liElement.innerText = result[detail];

       ulElement.appendChild(liElement)
        // console.log(result[key])
        // console.log(ulElement)

    }

    scopeShow[0].appendChild(ulElement)
}

const hoisting = document.getElementsByClassName("hoistshow");

let hoistobj = {
    point1: "It is the process whereby the interpreter appears to move the declaration of functions",
    point2: "Hoisting allows functions to be safely used in code before they are declared.",
    point3: "Hoisting is JS's default behavior of defining all the declarations at the top of the scope before code execution.",
    point4: "it enables us to call functions before they appear in the code.",
    point5: "Some ways to avoid hoisting are: Use let or const"
}

function hoisiting() {

    let ulElement = document.createElement("ul");
    ulElement.className = "point";

    localStorage.setItem("Hoisting:", JSON.stringify(hoistobj));

    var result = JSON.parse(localStorage.getItem("Hoisting"));

    for(const key in result){
        let liElement = document.createElement("li");
        liElement.className = "HoistElement";
        liElement.innerHTML = result[key];

        ulElement.appendChild(liElement)
    }
    hoistshow[0].appendChild(ulElement)
}
