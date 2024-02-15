let nav=document.querySelector("nav");
window.addEventListener("scroll",fixnav);
let navtop=nav.offsetTop;
function fixnav(){
    console.log(nav.offsetTop,window.scrollY);
    if(window.scrollY>=navtop)
    {
        document.body.classList.add("fixed-nav");
        // document.body.style.paddingTop=nav.offsetHeight+'px';//this will be used with fixed because it does not take additional space on viewport but sticky takes up its space on viewport and also it stays with scrolling
        document.body.style.paddingTop=nav.offsetHeight+'px';
        
    }
    else{
        document.body.style.paddingTop=0;
        
        document.body.classList.remove("fixed-nav");
    }
}