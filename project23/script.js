let video=document.querySelector(".view");
document.querySelector(".play").addEventListener("click",play);
video.addEventListener("click",play);
video.addEventListener("play",updatebutton);
video.addEventListener("pause",updatebutton);
function updatebutton(){
    console.log("update")
}

function play(){
    if(video.paused)
    {
      video.play();
      
      
    }
    else{
        
        video.pause();
    }
    
}
let vol=document.querySelector(".volume");
vol.addEventListener("change",volume);
vol.addEventListener("mousemove",volume);
function volume(){
  video.volume=this.value;//video[volume]
}
document.querySelector(".playback").addEventListener("change",playback);
document.querySelector(".playback").addEventListener("mousemove",playback);
function playback(){
    
    video.playbackRate=this.value;
}
document.querySelector(".skip-forward").addEventListener("click",skip);
document.querySelector(".skip-backward").addEventListener("click",skip);
function skip(){
    video.currentTime=video.currentTime+Number.parseFloat(this.dataset.skip);
}
let progress=document.querySelector(".progress");
video.addEventListener("timeupdate",handleprogress);
function handleprogress(){
    let percent=(video.currentTime/video.duration)*100;
    progress.style.flexBasis=`${percent}%`;
}
let filled=document.querySelector(".filled");
filled.addEventListener("click",scrubtime);
function scrubtime(e){
    let time=(e.offsetX/filled.offsetWidth)*video.duration;
    video.currentTime=time;
}
let mousedown=false;
filled.addEventListener("mousedown",()=>{mousedown=true});
filled.addEventListener("mousemove",(e)=>mousedown && scrubtime(e));//if mousedown true then run scrubtime
filled.addEventListener("mouseup",()=>mousedown=false);
let isescape=false;
let fullscreen=false;
document.querySelector(".screen").addEventListener("click",()=>{
    fullscreen=!fullscreen;
    full();
});
document.documentElement.addEventListener("dblclick",()=>{
    fullscreen=!fullscreen
full()});
function full(){
    if(isescape || !fullscreen)
    {
        document.querySelector(".container").style.width="60%";
    
    }
    else{
        document.querySelector(".container").style.width="100%";
        document.querySelector(".view").style.width="100%";
        document.querySelector(".view").style.height="100%";
    }
    
}
document.documentElement.addEventListener("keydown",(e)=>{
    if(e.keyCode==27)
    {
        isescape=true;
        full();
    }
})
