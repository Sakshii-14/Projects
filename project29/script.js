let text=document.querySelectorAll("a");
const elem=document.createElement("span");
elem.classList.add("active");
document.body.appendChild(elem);
text.forEach(elem=>elem.addEventListener("mouseenter",highlight));
function highlight(e)
{
   let coord=this.getBoundingClientRect();
  
   elem.style.height=`${coord.height}px`;
   elem.style.width=`${coord.width}px`;
   elem.style.transform=`translate(${this.offsetLeft}px,${this.offsetTop}px)`;
    
}
