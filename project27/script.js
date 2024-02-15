const list=document.querySelector(".list");
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(name){
    const regex=/^(A\s|An\s|The\s)/i;
    newelem=name.replace(regex,"").trim();  
    return newelem;
}
let sorted=bands.sort(function(a,b){
   if(strip(a)>strip(b))
   {
    return 1;
   }
   else
   {
    return -1;
   }
});
let newarr=sorted.map(elem=>{
    return `<li>${elem}</li>`;
})
list.innerHTML=newarr.join("");



