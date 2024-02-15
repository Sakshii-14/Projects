const images=document.querySelectorAll(".slide-in");
window.addEventListener("scroll",debounce(checkslide));

function debounce(func,wait=10,immediate=true)
{
    var timeout;
    return function()
    {
        var context=this,args=arguments;
        var later=function()
        {
            timeout=null;
            if(!immediate)
            {func.apply(context,args)}
        };
        var callnow=immediate && !timeout;
        clearTimeout(timeout);
        timeout=setTimeout(later,wait);
        if(callnow)func.apply(context,args);
    };
};
function checkslide(){
    images.forEach(image=>{
        const slideat=(window.scrollY+window.innerHeight)-(image.height/2);
        console.log(slideat);
        const imagebottom=image.offsetTop+image.height;
        let ishalfway=slideat>image.offsetTop;
        let notscrolledpast=window.scrollY<imagebottom;
        if(ishalfway && notscrolledpast)
        {
            image.classList.add("active");
        }
        else{
            image.classList.remove("active");
        }
    })
    
 }