function hexColor(){
 let hexdigits=['0','1','2','3','4','5','6','7','8','A','B','C','D','E','F'];
 let hexcode='#';
 for(let i=0;i<6;i++)
 {
    hexcode=hexcode+hexdigits[Math.floor(Math.random()*hexdigits.length)];
 }
 document.getElementById("hex-code").innerHTML=hexcode;
 document.getElementsByTagName("body")[0].style.background=hexcode;

}