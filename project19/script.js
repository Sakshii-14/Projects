const inputs=document.querySelectorAll(".controls input");
function updates(){
    
    let suffix=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
inputs.forEach((elem)=>{
    elem.addEventListener("change",updates);
    elem.addEventListener("mousemove",updates);
})