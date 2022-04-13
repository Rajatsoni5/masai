let res;

async function movie() {

    try {
        
        let data = await fetch(`http://www.omdbapi.com/?apikey=[2aea2a57]&t`)

        res = await (data.json())
        
        console.log("res:",res)


    } catch (error) {
        console.log("error", error)
    }
}

movie();