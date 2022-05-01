let navbar = () => {
    return `
    <h1>Get Your Receipe!</h1>
    <div id="hotline">
        <div class="one">
            <input type="text" id="input" placeholder="Search" />

            <button id="getdata">search</button>
        </div>
        <div class="two">
            <div>
                <a href="index.html"><p>Search Receipe</p></a>
            </div>
            <div>
                <a href="get.html"><p>Get Receipe</p></a>
            </div>
            <div>
                <a href="random.html"><p>Random Receipe</p></a>
            </div>
        </div>
</div>`
};

export {navbar};