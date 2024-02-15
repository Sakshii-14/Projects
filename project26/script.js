const hero=document.querySelector(".container");
const text=hero.querySelector("h1");
hero.addEventListener("mousemove",shadow);
function shadow(e){
 const {offsetWidth:width,offsetHeight:height}=hero;
 let{offsetX:x,offsetY:y}=e;
 if(this!=e.target)//this is hero section and e.target is h1
 {
   x=x+e.target.offsetLeft;
   y=y+e.target.offsetTop;
 }
 const walk=100;//100px
 let xwalk=Math.round((x/width * walk)-(walk/2));
 let ywalk=Math.round((y/height * walk)-(walk/2));
 console.log(xwalk,ywalk);
 text.style.textShadow=`${xwalk}px ${ywalk}px 0 rgba(255,0,255,0.7),
 ${xwalk*-1}px ${ywalk}px 0 rgba(0,0,255,0.7),
 ${ywalk}px ${xwalk}px 0 rgba(255,255,0,0.7),
 ${ywalk*-1}px ${xwalk}px 0 rgba(0,255,255,0.7)`;

}