
function Display(event){
    let text=document.querySelector("#content").value;
    if(event.target.nodeName==="IMG")
    {
        let ulist=document.querySelector("#g-list");
        let item=document.createElement("li");
        item.append(text);
        ulist.append(item);
        document.querySelector("#content").value=" ";   
    }
    
    if(event.target.nodeName==="LI"){
      if(event.target.style.textDecoration==="line-through")
        {
          event.target.style.textDecoration="none";
        }
      else
      {
        event.target.style.textDecoration="line-through";
      }
    }    
    
    
}
