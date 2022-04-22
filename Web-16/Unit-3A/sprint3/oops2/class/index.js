// helper function
function read(id){

  return document.getElementById(id).value;
}


async function Translate(){
    // 1. text to translate

    try {
        const input = read("input-text");

        const inp_lang = read("inp_lang");
        
        const out_lang = read("out_lang");

    // POST REQUEST
    const res = await fetch(`https://libretranslate.de/translate`, {
        method: 'POST',

            body: JSON.stringify( {
                q: input,
                source: inp_lang,
                target: out_lang,
                format: 'text',

            }),
            // addtional info about our request that server might need to know
            headers:{
                "content-Type": 'application/json'
            }

        });

    const data = await res.json()

    document.getElementById("out-value").innerText = data.translatedText;
    console.log("data", data)
    } catch (error) {
        console.log("error", error)
    }

    // input.innerText = null;
}