
async function searchHit() {

    let moviename = document.getElementById("search").value;

    moviename.innerText = ""

    // let moviename = document.getElementById("search").value;
    let print = document.getElementById("print");

    console.log("movie", moviename) 
    try {
        
        let data = await fetch(`https://www.omdbapi.com/?t=${moviename}&apikey=2aea2a57
        `)
        
        let res = await data.json()
        
        console.log("data",res)

        if(res.error) {
            print.innerHTML = res.Error
        } else {
            let Title = document.createElement("h3");
            Title.className = "text"
            Title.innerText = res.Title;

            let Year = document.createElement("p");
            Year.className = "text"
            Year.innerText = res.Year;

            let Country = document.createElement("p");
            Country.className = "text"
            Country.innerText = res.Country;
            
            let Actors = document.createElement("p");
            Actors.className = "text"
            Actors.innerText = res.Actors;
            
            let Language = document.createElement("p");
            Language.className = "text"
            Language.innerText = res.Language;
            
            let image = document.createElement("img")
            image.className = "img"
            image.src = res.Poster



            print.appendChild(Title,Year,Country,Actors,Language)
        }



    } catch (error) {
        print.innerText = error.message
    }

}

// movie();