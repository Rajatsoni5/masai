


function ordered() {
    try {
        setTimeout( async function() {
            let random = Math.floor(Math.random() * 10000);
            let choice = await document.getElementById("choice").value
        
            let div = document.getElementById("sample");
            let image = document.createElement("img");
            let id1 = document.createElement("p");


            if(choice == "Burger"){
                image.src = "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
            }else if(choice == "fries"){
                image.src = "https://media.istockphoto.com/photos/diverse-keto-dishes-picture-id1280158821?b=1&k=20&m=1280158821&s=170667a&w=0&h=ibwKxBzWcygq6NMKO5FTD-3ljLvwM8E1WVevw7XSmlk=";
            }else if(choice == "ice-cream"){
                image.src = "https://www.bigbasket.com/media/uploads/p/l/800376843_1-apsara-icecreams-ice-cream-trippy-targola.jpg";
            };
            id1.innerHTML = random

            div.append(id1)
            div.append(image)
            },1000  
        )  
    } catch (error) {
        
            let div = document.getElementById("sample");
            let image = document.createElement("img");
            let id1 = document.createElement("p");

            id1.innerHTML = "Sorry! server issue"

            image.src = ""

            div.append(id1)
            div.append(image)
    }
    
};



