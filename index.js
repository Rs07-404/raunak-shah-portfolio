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

window.addEventListener("scroll", function(){
    var cards = document.querySelectorAll(".card");
    for(let  i = 0; i < cards.length; i ++){
        let windowHeight = window.innerHeight;
        let element = cards[i].getBoundingClientRect();
        if( element.top >= 0 && 
            element.left >= 0 && 
            element.bottom <= (windowHeight || document.documentElement.clientHeight) && 
            element.right <= (windowHeight || document.documentElement.clientWidth)
            ){
            cards[i].classList.add("active");
        }
    }
})
