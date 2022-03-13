// function test() {
//     console.log("I'm late")
//     document.body.append("m ruk k aataa hu")
// };

// setTimeout(test, 2000);

// setInterval(test, 4000);


// class


//1--> Counter example --> play with it by changes
// let h1 = document.getElementById("count");


// function counter(){

//     let i=10;
    
//    let id = setInterval(function(){
//         i = i-1;

//         h1.innerText = i;

//         if(i==0){
//             clearInterval(id);
//         }
//     },1000);

// }

// counter();


//2--> Input for image store

function storeImage(){

    let image = document.getElementById('image').value

    let images_data = JSON.parse(localStorage.getItem('images')) || []
    console.log('images_data:', images_data);

    images_data.push(image);

    localStorage.setItem('images', JSON.stringify(images_data));
};