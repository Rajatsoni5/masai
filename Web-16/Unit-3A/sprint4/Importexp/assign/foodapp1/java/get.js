import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
let data = await res.json();
console.log('data:', data)
