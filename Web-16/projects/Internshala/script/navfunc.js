
 let showOption = (x) => {
        let nav = document.getElementById("nav_option")
        nav.style.display = "block"
        let noD = document.querySelectorAll(".navOptiondiv")[x]
        noD.style.display = "flex"
    
        let icon = document.getElementsByClassName("icon")[x]
        icon.style.transform = "rotate(180deg)"
        icon.style.top="-2px"
    
        let border = document.getElementsByClassName("optionDiv")[x]
        border.style.borderBottom = "2px solid #00A5EC"
        border.style.paddingBottom = "-2px"
        if (x < 3) {
            border.querySelector("a").style.marginBottom = "23px"
            border.querySelector("a").style.color = "#00A5EC"
            icon.style.borderTopColor = "#00A5EC"
    
        }
    
        border.addEventListener("mouseleave", leave)
        function leave(){
            event.preventDefault()
            icon.style.top="4px"
            border.style.borderBottom = "none"
            nav.style.display = "none"
            icon.style.transform = "none"
            noD.style.display = "none"
            if (x < 3) {
                border.querySelector("a").style.color = "gray"
                icon.style.borderTopColor = "#666060"
    
                border.querySelector("a").style.marginBottom = "25px"
            }
        }
        noD.addEventListener('mouseenter',()=>{
            showOption(x)
        })
        noD.addEventListener('mouseleave',leave)
    }


