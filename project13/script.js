function Create() {
    document.querySelector(".modal").style.display = "block";

}
document.querySelector("#cancel").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
})
let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680'];
let degrees = ["rotate(1deg)", "rotate(2deg)", "rotate(-1deg)", "rotate(3deg)", "rotate(-2deg)", "rotate(4deg)", "rotate(-4deg)", "rotate(5deg)", "rotate(-5deg)", "rotate(-3deg)"];

document.querySelector("#right").addEventListener("click", Add);

function Add() {
    let content=document.querySelector("#text").value;
    document.querySelector(".modal").style.display = "none";
    let p = document.createElement('p');
    p.innerHTML = content;
    let div = document.createElement('div');
    div.className = "box";
    div.setAttribute("special","1");
    div.appendChild(p);
    document.querySelector(".card-grid").appendChild(div);
    div.style.background=colors[Math.floor(Math.random()*colors.length)];
    div.style.transform=degrees[Math.floor(Math.random()*degrees.length)];
    div.addEventListener("dblclick",()=>{
        div.remove();})   
    
}
 



