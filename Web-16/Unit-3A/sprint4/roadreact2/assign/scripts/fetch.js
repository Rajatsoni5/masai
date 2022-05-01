let searchImages = async (API, value) => {

    try {
        let res = await fetch(`
        https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`);
        
        let data = await res.json();

        // console.log("data", data)
        return data;

    } catch (error) {
        console.log("error", error)
    }
};

let append = (data, container) => {

    data.forEach(({alt_description,urls: { small } }) => {

        let div = document.createElement("div");
        div.className = "box"

        let img = document.createElement("img");
        img.src = small;

        let h3 = document.createElement("h3")
        h3.innerHTML = alt_description;

        div.append(img,h3)
        container.append(div);
    });
};

export {searchImages, append};