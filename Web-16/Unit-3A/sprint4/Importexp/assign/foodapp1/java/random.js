import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();



//www.themealdb.com/api/json/v1/1/random.php


    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    let data = await res.json();
  console.log('data:', data)

  append(recepe);
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
