function makebubble(){

  let clutter="";
  for(i=1;i<=168;i++){
   let rn= Math.floor(Math.random()*10);
    clutter+=` <div class="bubble">${rn}</div>`
  }
  document.querySelector("#pbtm").innerHTML=clutter;
}
var timer=60;
function runtimer(){
   var timerint=setInterval(function(){
    if(timer>0){
      timer--;
      document.querySelector("#timerval").textContent=timer;
    }
    else{
   clearInterval(timerint);
   document.querySelector("#pbtm").innerHTML=`<h2 class="over">Game Over!! Your Score is ${score}.<br>
   Do You Want To Play Again</h2>

   <button>Play Again</button>`
   document.querySelector("button").addEventListener("click",function(){
window.location.reload();
   })
    }
  },1000)
}
var hitrn=0;
function gethit(){
  hitrn= Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent=hitrn;
}
var score=0;
function increasescore(){
  score+=10;
  document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
 let clickednum=dets.target.textContent;
 if(hitrn==clickednum){
    increasescore();
    makebubble();
    gethit();
 }
});
gethit() ;
runtimer();

makebubble();
