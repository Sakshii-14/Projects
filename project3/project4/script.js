function Display(e){
    e.preventDefault();
        document.querySelector("#text").innerHTML=document.querySelector('#message').value;
        console.log(e);
}
