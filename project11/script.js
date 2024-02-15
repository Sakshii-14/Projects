function Submit(){
    let content=document.querySelector("#content").value;
    let div1=document.createElement("div");
    let divlist=div1.classList;
    divlist.add("box");
    
    let p=document.createElement("p");
    p.innerHTML=content;
    let div2=document.createElement("div");
    let divlist2=div2.classList;
    divlist2.add("icons");
    let i1=document.createElement("i");
    // let ilist1=i1.classList;
    // ilist1.add("fa-solid fa-square-check");
    i1.className="fa-solid fa-square-check";
    i1.style.color="darkgray";
    // i1.setAttribute("onclick","done()");
    
    i1.addEventListener("click",()=>{
        if(i1.style.color!="green")
        {
            i1.style.color="green";
        }
        else{
            i1.style.color="darkgray";
        }
    })
    let i2=document.createElement("i");
    // let ilist2=i2.classList;
    // ilist2.add("fa-solid fa-trash");
    i2.className="fa-solid fa-trash";
    i2.style.color="darkgray";
    // i2.setAttribute("onclick","Display()");
    i2.addEventListener("click",()=>{
        if(div1.style.display!="none")
        {
          div1.style.display="none";
        }
    })
    
    div2.appendChild(i1);
    div2.appendChild(i2);
    div1.appendChild(p);
    div1.appendChild(div2);
    document.querySelector(".items").appendChild(div1);
   
}

// function Display(){
//     let div1=document.querySelector(".box");
//     if(div1.style.display!="none")
//     {
//       div1.style.display="none";
//     }
// }
