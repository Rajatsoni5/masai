
async function searchHit() {

    let moviename = document.getElementById("search").value;
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
            let h3 = document.createElement("h3");
            h3.innerText = res.Title;

            print.appendChild(h3)
        }



    } catch (error) {
        print.innerText = error.message
    }
    moviename.innerText = ""
}

// movie();