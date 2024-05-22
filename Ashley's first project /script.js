alert("Welcome!"); 

     let userAge= 25;
     let userName = "Ashley";


let doubleAge = userAge * 2;


     if (userAge >=18) {
       console.log(userName + " is an adult ") ;
     } else {
          console.log(userName + " is a minor ") ;
     }



     let isAdult = userAge >= 18;
     let  hasName = userName !== " ";



     console.log(" Double of " + userName + " 's age is: " + doubleAge);



     // let outputDiv =  document.getElementById("output");

let outputDiv = document.getElementById("output");
outputDiv.innerHTML = "<p>" + userName + " is an adult: " + isAdult + "</p>";
outputDiv.innerHTML += "<p>" + userName + " has a name: " + hasName + "</p>";

// // Additional output to console
// console.log(userName + " is an adult: " + isAdult);
// console.log(userName + " has a name: " + hasName);


ddocument.addEventListener("DOMContentLoaded", function() {
     const audioElement = document.getElementById('background-music');
     const musicControlButton = document.getElementById('music-control');
 
     musicControlButton.addEventListener('click', function() {
         if (audioElement.paused) {
             audioElement.play();
             musicControlButton.textContent = 'Pause Music';
         } else {
             audioElement.pause();
             musicControlButton.textContent = 'Play Music';
         }
     });
 });
 

      document.getElementById('play-pause-button').addEventListener('click', function() {
          var audioPlayer = document.getElementById('audio-player');
          if (audioPlayer.paused) {
              audioPlayer.play();
              this.textContent = 'Pause';
          } else {
              audioPlayer.pause();
              this.textContent = 'Play';
          }
      });
      