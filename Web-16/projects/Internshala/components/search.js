let option= document.getElementById("search_option")
let search = document.getElementById("search_main")
function showOptionsearch(){
    if(option.style.display==="none"){
        option.style.display='block'
    }else{
        option.style.display='none'
        
    }
}
function showSearch(){
    if(search.style.display==="none"){
        search.style.display="flex"
    }else{
        search.style.display="none"
    }
}
function call(event){
    if(event.keyCode===13|| event===true){
        location="./Rajat.html"
    }
}