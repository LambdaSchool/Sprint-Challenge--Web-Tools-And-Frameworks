let twirlies = document.getElementsByClassName("spaceStuff");

// function startTwirl(){
//   twirlies = document.getElementsByClassName("spaceStuff");
//   twirlMe(twirlies, 0);
// }
// function twirlMe(arr, num){
//   if (num < twirlies.length){
//     let num2 = num + 1;
//     console.log("starting " + num);
//     arr[num].style.animation = "twirl 10s linear infinite";
//     setTimeout(twirlMe(twirlies, num2), 2000);
//   }
// }

function endTwirl(){
  for(let i = 0; i< twirlies.length; i++){
    twirlies[i].style.animation = "";
  }
}

function startTwirl() {
  for(let i=0; i<twirlies.length; i++){
    twirlies[i].style.animationDelay = i*4 + "s";
    twirlies[i].style.animation = "twirl 4s linear infinite"
  }
}
