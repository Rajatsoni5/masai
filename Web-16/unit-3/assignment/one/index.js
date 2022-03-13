// // console.log("hello")
// async function Rajat() {
//     try {
        
//     let result = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9b2a89530a87ba66ebd0b27ef292906c')

//     let result1 = await result.json()

//     console.log("result:", result1.results)
    
//     return result;

//     } catch (error) {
//         return error;        
//     }  
// };

// Rajat();

let sample = document.getElementById("container");

async function Rajat() {
    try {
        
    let result = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9b2a89530a87ba66ebd0b27ef292906c')
    .then((result)=>result.json())
    .then((result)=>  result.results);

    // let result1 = await result.json()

    console.log("result:", result)
    
    for(let i=0; i<result.length; i++){
        console.log(result[i].title)

        let para = document.createElement("h1");
        para.innerHTML = result[i].title

        
        let para1 = document.createElement("p");
        para1.innerHTML = result[i].vote_average

        let para2 = document.createElement("div");
        para2.innerHTML = result[i].vote_average
        para2.id = "ok"
        para2.appendChild(para)
        para2.appendChild(para1)
        sample.appendChild(para2)
    }
    // return result;

    } catch (error) {
        return error;        
    }  
};

Rajat();