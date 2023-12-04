let check = true;
document.getElementById('window-container').addEventListener('click', function () {
        if(check===true){
        document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
        document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
        document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"
        check=false;
        fetch('./jokes.json') // Replace 'yourfile.json' with the actual path to your JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(jsonData => {
            // Handle the JSON data here
            showJoke(jsonData)
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
        
        function showJoke(file){
            let index = Math.floor(Math.random() * (30 - 1 + 1)) - 1;
            console.log(index)
            document.getElementById('joke-display').innerHTML=file[index].name;
        }
        }else{
            document.querySelector('.left-door').style = "animation: left-close 0.3s backwards"
            document.querySelector('.right-door').style = "animation: right-close 0.3s backwrds"
            document.querySelector('.joke-display').style = "animation: display-close 0.1s backwards"
            check=true;
            
        }
    })
