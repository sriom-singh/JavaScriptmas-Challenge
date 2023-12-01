
const countdownDisplay = document.getElementById("countdown-display")
 function renderCountdown(){   
     const christmas = 25   
     
 // Task:    // - Get today's date (you only need the day). 
        const date = new Date()
        const day =date.getDate()
        let currHour = date.getHours();
        let currMin = date.getMinutes()
        let currSec = date.getSeconds()

 // - Calculate remaining days.    
        let remDay = christmas - day;
        let remHour = 24 -currHour;
        let remMin = 60 - currMin;
        let remSec = 60 - currSec;
   
// - Display remaining days in countdownDisplay.} renderCountdown() 
        document.getElementById('day').innerHTML=remDay
        document.getElementById('hour').innerHTML=currHour
        document.getElementById('min').innerHTML=remMin
        document.getElementById('sec').innerHTML=remSec   
 }

 setInterval(renderCountdown, 1000);


