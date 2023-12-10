const player = document.getElementById("player")


function playSong(id , clicked) {
    // Challenge: Add code here to make the youtube player play the new YouTube song
    player.src=`https://www.youtube.com/embed/${id}`
    var buttons = document.getElementsByTagName('button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.opacity = '0.5';
                buttons[i].classList.remove("active")
            }
            clicked.style.opacity = '1';
    clicked.classList.add("active")
    console.log(clicked)
    document.getElementById('name').innerHTML=clicked.innerHTML
}

