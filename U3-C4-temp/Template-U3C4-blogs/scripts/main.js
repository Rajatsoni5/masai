let main = document.getElementById("main");


var articles;
async function apiCall(url) {
    try {
        let articles = await fetch(`https://blog-search-u3c4.herokuapp.com/api/blogs/psychology`)
        .then((articles) => articles.json())
        .then((articles)=> articles);
        console.log("articles:", articles);


        appendArticles(articles, main);

    } catch (error) {
        console.log("error:", error)
    }
    //add api call logic here
}
apiCall()


function appendArticles(articles, main) {

    // add append logic here

        for(var i=0; i<articles.length; i++){
            // console.log(articles[i])
            
            let div = document.createElement("div")

            let name = document.createElement("h4")
            name.innerHTML = articles[i].author;
    
            let p = document.createElement("p")
            p.className = "p"
            p.innerHTML = articles[i].title;
    
            let img = document.createElement("img")
            img.className = "img"
            img.src = articles[i].urlToImage;

            let button = document.createElement("button")
            button.innerHTML = "Blog Shown"
            button.id = "click"
        
            div.append(img,p,name,button);
    
            main.append(div);
            // console.log(articles[i])

            function active(article){
                // console.log(article.title)
                let result = {
                    "p": article.title, "img": article.urlToImage, "name": article.author
                }
                button.addEventListener("click", function(article){

                   
                    // console.log(result)
                    localStorage.setItem("article", JSON.stringify(result))
                    window.location.href = './blog.html'
                    
                
                });

            }
            active(articles[i]);
        };

}
appendArticles()

export { apiCall, appendArticles }



