/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/ 

const audio = document.getElementById('myAudio');

// Play the audio on page load
// document.addEventListener('click', function() {
//     audio.play().catch(error => {
//         // Handle the error (e.g., show a message to the user)
//         console.error('Error playing audio:', error);
//     });
// });

const star = document.getElementById('star');
const redLight = document.getElementsByClassName('red')
function red() {
    for (let index = 0; index < redLight.length; index++) {
        redLight[index].style.filter="brightness(0.5)";
        star.style.filter="brightness(0.5)";

     }
     
}
setInterval(() => {
    redL()
    red();
}, 1600);

function redL(){
    setTimeout(() => {
        for (let index = 0; index < redLight.length; index++) {
            redLight[index].style.filter="brightness(1)";
            star.style.filter="brightness(1)";
         }
    
    },500);
}

const blueLight = document.getElementsByClassName('blue')
function blue() {
    
        for (let index = 0; index < blueLight.length; index++) {
            blueLight[index].style.filter="brightness(1)";
         }
}
setInterval(() => {
    blueL()
    blue();
}, 800);

function blueL(){
    setTimeout(() => {
        for (let index = 0; index < blueLight.length; index++) {
            blueLight[index].style.filter="brightness(0.5)";

            blueLight[index].style.boxShadow="0px 0px 0px sky";

         }
    },500);
}

