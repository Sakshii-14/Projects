function start() {

    document.querySelector(".dicebox").style.display = "block";
    document.querySelectorAll(".image").forEach((elem) => {
        elem.style.display = "block";
    })
}

let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
let index=1;
let img=document.createElement("img");
img.src="mole.png";
img.className="image";
document.getElementById(`${arr[index-1]}`).appendChild(img);


document.querySelector("dicebox").addEventListener("click",()=>{
    let dot=Math.floor((Math.random()*6)+1);
    document.getElementById(`${arr[index-1]}`).removeChild(img);
    index=index+dot;
    for(let i=0;i<dot;i++)
    {
        document.getElementsByClassName("dots")[i].classList.add("active");
    }
    player();
})

function player()
{   
    
    if(checkSnake())
    {
      if(index==19)
      {
        index=2;
      }
      else if(index==13)
      {
        index=9;
      }
      else if(index==10)
      {
        index=3;
      }
    }
    else if(checkladder())
    {
       if(index==7)
       {
          index=14;
       } 
       else if(index==12)
       {
        index=16;
       }
       else if(index==4)
       {
        index=18;
       }
    }
    document.getElementById(`${arr[index-1]}`).appendChild(img);
    if(index==20)
    {
        document.querySelector(".over").style.display="block";
    }
}
function checkSnake(){
  let snake=[19,13,10];
  snake.forEach((elem)=>{
    if(elem==index)
    {
        return true;
    }
  })
  return false;
}
function checkladder(){
    let ladder=[7,12,4];
    ladder.forEach((elem)=>{
      if(elem==index)
      {
          return true;
      }
    })
    return false;
}