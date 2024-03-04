var menu = document.getElementById("menu");
var nav = document.getElementById("nav")

menu.addEventListener('click',(event) =>{
    menu.classList.toggle("change")
    if (nav.style.display === "none"){
        if(menu.classList.contains("change")){
            nav.style.display = "block";
        }
    }else{
        if(menu.classList.contains("change")){
            nav.style.display = "block"
        }else{
            nav.style.display = "none"
        }
        
    }
    console.log("clicked "+event+menu)
})
