document.addEventListener("keydown",play);

function play(e)
{   let images=document.querySelectorAll(".image");
    images.forEach(elem=>{
        elem.style.display="none";
    })
    document.querySelector(`[data-code="${e.keyCode}"]`).classList.add("active");
    let key=document.querySelectorAll(".boxes");
    key.forEach(elem=>{
        elem.addEventListener("transitionend",remove);
        
    })
    document.querySelector(`img[data-code="${e.keyCode}"]`).style.display="block";
}
function remove(e){
    if(e.propertyName!="transform")
     return;
    this.classList.remove("active");
    
}
