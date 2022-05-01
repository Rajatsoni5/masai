import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();


let container=document.getElementById("dishes")
let food=document.getElementById("para")

const getData = async() => {
  try {
    let input=document.getElementById("input").value;
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
    let data = await res.json();
    let recepe=data.meals;


    if(recepe==undefined){
      para.innerHTML=null;
      container.innerHTML=null;
       let text=document.createElement("img");
       text.src="https://images.ctfassets.net/co0pvta7hzrh/14g4FUimGRuvswJOh89mVD/718d400387e3c518c0d218c6c6406d96/Typeform-Blog-Gifs-Inline04.gif"


       let p=document.createElement("p")
       p.innerHTML="SORRY!!! Not Available"
       para.append(p,text)
    }
     else{

      append(recepe);
     }
    

    console.log("data:", data);
    //console.log(`hii`);
  } catch (error) {
    console.log("error:", error);
  }
}

document.getElementById("getdata").addEventListener("click", getData );


const append = (data)=> {
  container.innerHTML=null;
  try{

    data.forEach((el)=>{

      let div = document.createElement("div");
      let name=document.createElement("p");
      name.innerText=el.strMeal;
      name.style.fontSize="20px";

      let pic=document.createElement("img")
      pic.src=el.strMealThumb;
      pic.style.height="200px"
      pic.style.width="250px"
      div.append(name,pic);
      container.append(div);

    });

  }
  catch(error){
    console.log('error:', error)

  }

}