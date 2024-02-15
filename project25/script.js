let item=document.querySelector(".item");
let list=document.querySelector(".dish");
let items=JSON.parse((localStorage.getItem('items')))||[];
item.addEventListener("submit",additem);
function additem(e){
   e.preventDefault();
   let text=this.querySelector("#textitem").value;
   let item={
    text:text,
    done:false
   };
   items.push(item);
   localStorage.setItem('items',JSON.stringify(items));
   populate(items,list);
   this.reset();
}
function populate(items=[],list)//here populate func is used to render the data on page
{
    let html=items.map((elem,i)=>{
        return `
        <li><input type="checkbox" data-index="${i}" id="item${i}" ${elem.done?'checked':''}>
            <label for="item${i}">${elem.text}</label>
        </li>`
       }).join("");
       list.innerHTML=html;
       
}
populate(items,list);
list.addEventListener("click",toggleitem);
function toggleitem(e){
    if(e.target.matches('input'))
    {
        const el=e.target;
        const index=el.dataset.index;
        items[index].done=!items[index].done;
        localStorage.setItem('items',JSON.stringify(items));
        populate(items,list);
    }
    else
     return ;
}
let clear=document.querySelector("#clear");
clear.addEventListener("click",clearfunc);
function clearfunc(){
 localStorage.clear();
 items=[];
 list.innerHTML=""
}
document.querySelector("#check").addEventListener("click",check)
function check(){
   items.forEach(elem=>{
    elem.done=true;
    
   })
   localStorage.setItem('items',JSON.stringify(items));
   populate(items,list);
}
document.querySelector("#uncheck").addEventListener("click",uncheck);
function uncheck(){
    items.forEach(elem=>{
        elem.done=false;
        
       })
       localStorage.setItem('items',JSON.stringify(items));
       populate(items,list);
}