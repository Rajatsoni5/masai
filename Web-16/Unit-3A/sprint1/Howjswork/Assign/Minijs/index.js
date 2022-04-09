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

    for(const key in result){
       let liElement = document.createElement("li");
       liElement.className = "scopeElement"
       liElement.innerText = result[key];

       ulElement.appendChild(liElement)
        // console.log(result[key])
        console.log(ulElement)

    }

    scopeShow[0].appendChild(ulElement)

    // scopeshow.append(scopeobj);
}
