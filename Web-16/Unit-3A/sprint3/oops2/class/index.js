// helper function
function read(id){

  return document.getElementById(id).value;
}


async function Translate(){
    // 1. text to translate

    try {
        const input = read("input-text");


    // POST REQUEST
    const res = await fetch(`https://libretranslate.de/translate`, {
        method: 'POST',

            body: JSON.stringify( {
                q: input,
                source: 'en',
                target: 'hi',
                format: 'text',

            }),
            // addtional info about our request that server might need to know
            headers:{
                "content-Type": 'application/json'
            }

        });

    const data = await res.json()
    console.log("data", data)
    } catch (error) {
        console.log("error", error)
    }
}