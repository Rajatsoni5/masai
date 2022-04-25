// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

var pay = localStorage.getItem("amount");

let h1 = document.createElement("h1");
h1.innerText = pay;
h1.id = "wallet";

navbar.appendChild(h1);

// http://www.omdbapi.com/?apikey=2aea2a57
// http://www.omdbapi.com/?apikey=2aea2a57&t=${movieName}

            let show = document.getElementById("movies");

            let id;



async function searchMovies() {
    try {
        let movieName = document.getElementById("search").value;

        let res = await fetch(`https://www.omdbapi.com/?apikey=2aea2a57&t=${movieName}`);

        let data = await res.json();
        console.log("data1:", data);

        return [data];

        
    } catch (error) {
        console.log("error", error)
    }
};


function appendMovies(data){

    for(let i=0; i<data.length; i++){
        
        let div = document.createElement("div");
        div.className = "box";
    
        let image = document.createElement("img");
        image.src = data[i].Poster
        let title = document.createElement("h3");
        title.innerText = data[i].Title;

        let button = document.createElement("button");
        button.innerText = "Book now";
        button.className = "book_now"
        button.onclick = () => {

            let movie = div.innerText;

            localStorage.setItem("movie", movie)

            window.location.href = "checkout.html"
        }
        div.append(image, title, button)
        show.appendChild(div);
    };

 
};


async function main(){

    let data = await searchMovies();
    // console.log("data3", data)

    if(data === undefined){
        show.innerHTML = "Enter a Valid Movie Name";
    };

    appendMovies(data);
};

function Debounc(func, delay){

    if(id){
        clearInterval(id)
    }
    id = setTimeout(function(){

        func();
    },delay)
}