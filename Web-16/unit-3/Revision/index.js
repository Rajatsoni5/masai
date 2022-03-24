// clouser - function under function

// function A () {
//     let x =1;
//     function B() {
//         let y  =2;
//         return y;
//     }
//     return x;
// }


// fetch

// fetch("write api")
// .then((res)=> res.json())
// .then((data) => {
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// });

// IMport/Export

const app = document.getElementById("app")

function sum(a, b){
    return a+b
}

app.innerText = sum(3,5)
