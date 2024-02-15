function generatecard(){
    var quotes={
       "-Sakshi":"TEsting",
       "-987":"TEsting","-456":"Hello","-123":"TEsting","-ABC":"TEsting",
    }
   var authors=Object.keys(quotes);
   var index=authors[Math.floor(Math.random()*authors.length)];
   var value= quotes[index];
   document.getElementById("content").innerHTML=value;
   document.getElementById("author").innerHTML=index;
}