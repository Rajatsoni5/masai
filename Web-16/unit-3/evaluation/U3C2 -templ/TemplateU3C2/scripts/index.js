
let sample = document.getElementById("menu");

async function dishes(){
        try {
            let result = await fetch('https://masai-food-api.herokuapp.com/api/meals/india')
            .then((result)=>result.json())
            .then((result)=> result);

            console.log("result:", result)

            for(let i=0; i<result[0].meals.length; i++){
                console.log(result[0].meals[i]);

                let name = document.createElement("h3")
                name.innerHTML = result[0].meals[i].strMeal
                name.className = "name";

                let img= document.createElement("img");
                img.src = result[0].meals[i].strMealThumb
                img.className = "img";

                let price = document.createElement("price")
                price.innerHTML = "Rs "+ result[0].meals[i].price
                price.className = "price"

                let add = document.createElement("BUTTON")
                add.innerHTML = "Add to Cart"
                add.className = "addtocart"

                sample.append(name)
                sample.append(img)
                sample.append(price)
                sample.append(add)
            }
            
        } catch (error) {
            return error;
        }
};

let button= document.getElementsByClassName("addtocart")
console.log("button", button)

for(let j=0; j<button.length; j++){
    button[j].addEventListener("click", function(){
        alert("Hello")
    })
}
dishes();