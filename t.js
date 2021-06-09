var p1button=document.querySelector("#primary");
var p2button=document.querySelector("#secondary");
var p1display=document.querySelector("#pri");
var p2display=document.querySelector("#sec");
var input=document.getElementById("winning runs");
var winruns=document.getElementById("win");
var p1score=0;
var p2score=0;
var gameovered=document.getElementById("gameover");

var gameover=false;
var reset=document.querySelector("#reset");
p1button.addEventListener("click",function(){
  if(!gameover) {
p1score++;
if(p1score===winruns){
    gameover=true;
    p1display.textContent=p1score;
p1display.classList.add("winner");
}
else
{
p1display.textContent=p1score;
gameover=false;
}
  } 
  else
  {
      gameovered.textContent="GAMEOVER";
      gameovered.style.color="red";
  }
});
p2button.addEventListener("click",function(){
if(!gameover) {
    p2score++;
    if(p2score===winruns){
        gameover=true;
        p2display.textContent=p2score;
    p2display.classList.add("winner");
    }
    else
    {
    p2display.textContent=p2score;
    gameover=false;
    }
      } 
      else
      {
          gameovered.textContent="GAMEOVER";
          gameovered.style.color="red";
      }
    });

    reset.addEventListener("click",function(){
        Reset();
    })
    function Reset(){
        p1score=0;
        p2score=0;
        winruns=input;
        p1display.textContent=0;
        p2display.textContent=0;
        p1display.style.color="black";
        p2display.style.color="black";
        p2score.textContent=0;
        gameover=false;
        gameovered.innerHTML="  <span id="/gameover/">winning runs:<span id="/win/">5</span></span>";
gameovered.style.color="black";

    }
    input.addEventListener("change",function(){
        
    })