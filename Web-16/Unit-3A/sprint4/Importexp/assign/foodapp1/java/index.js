let meal = document.getElementById("meal");


async function hit(){

  try {
    let search = document.getElementById("search").value;

    let div = document.createElement("div");
    div.className = "mealBox"

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    let data = await res.json();

    console.log("data", data)

    
let url = `www.themealdb.com/api/json/v1/1/random.php`;

let res1 =  await fetch(url);
let data1 = await res1.json();

console.log("data1", data1)
  } catch (error) {
      console.log("error", error)
  }
}
