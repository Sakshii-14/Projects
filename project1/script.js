let index=0;
function changeColor(){
 let colors=["red","yellow","blue","green","purple","beige","orange"];
 document.getElementsByClassName("container")[0].style.background = colors[index];
 index++;
 if(index>colors.length-1)
  index=0;
}