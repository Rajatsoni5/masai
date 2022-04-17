let menu = document.getElementById("menu")
let count = 0;
async function food() {

    try {

        let data = await fetch(`https://masai-food-api.herokuapp.com/api/meals/india`);
        let res = await data.json();
    
        console.log("data", res[0].meals)

        for(var i=0; i<(res[0].meals).length; i++){
            // console.log(res[0].meals)

            let div  = document.createElement("div")
            div.className = "foodBox"

            let name = document.createElement("h3");
            name. innerText = res[0].meals[i].strMeal

            let image = document.createElement("img");
            image.src = res[0].meals[i].strMealThumb
            image.className = "img"

            let price = document.createElement("p")
            price.innerText = "Rs"+ " " +  res[0].meals[i].price

            let button = document.createElement("button")
            button.innerText = "Add To Cart"
            button.id = "addtocart"

        
            div.append(name,image,price, button)
            menu.append(div)

            let hit = document.getElementById("addtocart")
            hit.addEventListener("click", function(event){
                let result = {
                    strMeal: res[0].meals[i].strMeal,
                }
                localStorage.setItem("cart", JSON.stringify(result))
                count++;
                console.log(count)
            })

        };
       

    } catch (error) {
        // console.log("error", error)
        return error;
    }
}
food();


// console.log("ok",hit)
// hit.addEventListener("click", function(){
    // for(var j=0; j<menu.length; j++){
        // console.log("bub",menu[j])
//     }

// });
