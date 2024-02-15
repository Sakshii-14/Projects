let arr=["1","2","3","4","5","6","7","8","9"];
let id1,id2;
let score=0;
let game=null;
function start(){
    game=true;
    if(game)
     {id1=setInterval(Setmole, 3000);
      id2=setInterval(Setplant,1000);
     }
}
function Setmole(){
  if(game)
  {
    let img1=document.createElement("img");
    img1.src="mole.png";
    img1.className="image";
    let index1=arr[Math.floor(Math.random()*arr.length)];
    if(!document.getElementById(`${index1}`).hasChildNodes())
    {
       document.getElementById(`${index1}`).appendChild(img1);
    }
    img1.addEventListener("click",()=>{
       score+=10;
      document.querySelector("#score").innerHTML=score;
      document.getElementById(`${index1}`).removeChild(img1);
    })
   
    setTimeout(()=>{
      document.getElementById(`${index1}`).removeChild(img1);
    },2000);
  }
 
}
function Setplant(id1,id2){
  if(game)
  {
    
    let img2=document.createElement("img");
    img2.src="plant.jpeg";
    img2.className="image";
    img2.addEventListener("click",()=>{
      game=false;
      score=0;
      document.querySelector("#score").innerHTML=score;
      document.querySelector(".over").style.display="block";
      document.getElementById(`${index2}`).removeChild(img2);
      clearInterval(id1);
      clearInterval(id2);
    })
    let index2=arr[Math.floor(Math.random()*arr.length)];
   if(!document.getElementById(`${index2}`).hasChildNodes())
   {
     document.getElementById(`${index2}`).appendChild(img2);
   }
  
   setTimeout(()=>{
    document.getElementById(`${index2}`).removeChild(img2);
   },700);
  }
}
