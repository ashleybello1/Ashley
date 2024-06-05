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

      let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

      