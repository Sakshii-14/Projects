window.addEventListener("load",Subtract);
function Subtract(){
    let num1=Math.floor(Math.random()*100);
    let num2=Math.floor(Math.random()*100);
    let ans=num1-num2;
    let dummy1=Math.floor(Math.random()*100);
    let dummy2=Math.floor(Math.random()*100);
    let allans=[ans,dummy1,dummy2];
    for(i=0;i<allans.length;i++)
    {
        let j=Math.floor(Math.random()*allans.length);
        [allans[i],allans[j]]=[allans[j],allans[i]];
    }
    document.querySelector("#num1").innerHTML=num1;
    document.querySelector("#sign").innerHTML=" - ";
    document.querySelector("#num2").innerHTML=num2;
    document.querySelector("#equals").innerHTML=" = ";
    document.querySelector("#mark").innerHTML=" ? ";
    document.querySelector("#box1").innerHTML=allans[0];
    document.querySelector("#box2").innerHTML=allans[1];
    document.querySelector("#box3").innerHTML=allans[2];
    document.querySelector("#box1").addEventListener("click",()=>{
        if(document.querySelector("#box1").innerHTML==ans)
        {
            Subtract();
        }
        else{
            alert("Wrong Answer");
        }
    })
    document.querySelector("#box2").addEventListener("click",()=>{
        if(document.querySelector("#box2").innerHTML==ans)
        {
            Subtract();
        }
        else{
            alert("Wrong Answer");
        }
    })
    document.querySelector("#box3").addEventListener("click",()=>{
        if(document.querySelector("#box3").innerHTML==ans)
        {
            Subtract();
        }
        else{
            alert("Wrong Answer");
        }
    })
    
}