let second=document.querySelector("#second-hand");
let minute=document.querySelector("#minute-hand");
let hour=document.querySelector("#hour-hand");
function setdate(){
    const date=new Date();
    let seconds=date.getSeconds();
    let minutes=date.getMinutes();
    let hours=date.getHours();
    let seconddegree=((seconds/60)*360)+90;
    let minutedeg=((minutes/60)*360)+90;
    let hourdeg=((hours/12)*360)+90;
    console.log(seconds);
    console.log(minutes+"minutes");
    console.log(hours)
    second.style.transform=`rotate(${seconddegree}deg)`;
    minute.style.transform=`rotate(${minutedeg}deg)`;
    hour.style.transform=`rotate(${hourdeg}deg)`;
}
setInterval(setdate,1000)
