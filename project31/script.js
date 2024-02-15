let triggers=document.querySelectorAll(".cool>li");

let nav=document.querySelector(".top");
let background=document.querySelector(".dropdownBackground");

triggers.forEach(elem=>elem.addEventListener("mouseenter",handleenter));
triggers.forEach(elem=>elem.addEventListener("mouseleave",handleleave));
function handleenter(){
    this.classList.add("trigger-enter");
    setTimeout(()=>{this.classList.contains("trigger-enter") && this.classList.add("trigger-enter-active")},120);
    background.classList.add("open");
    let dropdown=this.querySelector(".dropdown");
    let coord=dropdown.getBoundingClientRect();
    let navcoords=nav.getBoundingClientRect();
    console.log(coord.height,coord.width);
    background.style.height=`${coord.height}px`;
    background.style.width=`${coord.width}px`;
    background.style.transform=`translate(${coord.left-navcoords.left}px,${coord.top-navcoords.top}px)`;
}
function handleleave(){
    this.classList.remove("trigger-enter");
    setTimeout(()=>{this.classList.remove("trigger-enter-active")},120);
    background.classList.remove("open");
}