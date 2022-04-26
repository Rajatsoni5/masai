//youtube API - reading documention

//array of object

//append

//find api with url
// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=football&key=[YOUR_API_KEY] HTTP/1.1

//api key - AIzaSyD89hd_35X_COpV5IE8h18YHlihKmsy2G0

const search_results_div = document.getElementById("search_results")

const searchVideos = async () => {

    try {
        
        let inp = document.getElementById("search").value;

        let res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyAXb4WnRThZhHa7cCDKNwLZCRiXwI9zVaU&maxResults=20`
        );

        let data = await res.json();
        console.log("data", data)

       let videos = data.items;
       
        appendVideos(videos);

       return videos;

    } catch (error) {
        console.log("error:", error)
    }
};



const appendVideos = (data) => {
    search_results_div.innerHTML = null;

    try {
        data.forEach((el) => {

        let div = document.createElement("div");
        div.className = "box"

        let title = document.createElement("p");
        title.innerText = el.snippet.title;

        let iframe = document.createElement("iframe")
        iframe.src = `https://www.youtube.com/embed/${el.id.videoId}`
        iframe.className = "video"

        div.append(iframe, title)
        search_results_div.append(div)

    });
    } catch (error) {
        console.log("error:", error)
    }
};

// let stuff = document.getElementsByClassName("video");
// stuff.addEventListener("click", function(){

    

//     let iframe = `https://www.youtube.com/embed/${el.id.videoId}`

//     localStorage.setItem("selected", iframe)

//     window.location.href = "video.html"

// })






