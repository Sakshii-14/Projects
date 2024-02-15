let quest=document.querySelector("#question").value;
let ans=document.querySelector("#answer").value;
function save(){
    localStorage.setItem(quest,ans);
    let div=document.createElement("div");
    div.classList.add("card");
    let p1=document.createElement('p');
    let p2=document.createElement('p');
    p1.classList.add("card-quest");
    p2.classList.add("card-ans");
    p1.innerHTML=quest;
    p2.innerHTML=localStorage.getItem(quest);;
    div.appendChild(p1);
    div.appendChild(p2);
    document.querySelector(".card-grid").appendChild(div);
    // p2.addEventListener("click",visible);
}
p2.addEventListener("click",visible);
function clear(){
    document.querySelector("#question").value=" ";
    document.querySelector("#answer").value=" ";
}
function visible(){
    if(p2.style.visibility==="hidden")
    {
        p2.style.visibility="visible";
    }
    else{
        p2.style.visibility="hidden";
    }
}