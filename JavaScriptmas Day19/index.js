
let word = '' 
let wordArr = []
const wordDisplay = document.getElementById('word-display')
document.addEventListener('submit', handleGuess)

function assignWord(words){
    word = words;
    wordArr = word.split('');
}

function renderSpaces() {
    const wordHtml = wordArr.map(() => {
        return `<span class="letter">-</span>`
    })
    console.log(wordArr)
    wordDisplay.innerHTML = wordHtml.join('')
}


function handleGuess(e) {
    e.preventDefault()
    let currentState = []
    let input = document.getElementById('user-input')
    let guess = input.value.toLowerCase();
    const guessArr = guess.split('')
    wordArr.forEach((letter) => {
        if (guessArr.includes(letter)) {
            currentState.push(letter)
        } 
    });
    /* bugs end 🦠*/ 
    renderGuess(currentState)

    // checkWin(guess)
    input.value = ''
}




function renderGuess(guess){
    console.log(guess,"Hello")
    const indexArr =[];

    wordArr.map((letter,index) => {
        if (guess.includes(letter)) {
            indexArr.push(index);
        } 
})

for(let i = 0;i<indexArr.length;i++){
    document.querySelectorAll('.letter')[indexArr[i]].innerHTML=guess[i];
}


checkWin()
}

function checkWin(){
    for(let i=0;i<wordArr.length;i++){
        const data = document.querySelectorAll('.letter')[i].innerHTML;
        if (data!=wordArr[i]) {
            return;
        }
        
    }
    animateCong();
    resetAll();
}

const hintsList = [
    "Festive figure in red, bearing gifts and ho-ho-ho spirit.",
    "Celebrated with joy, a season marked by decorations, gifts, and goodwill.",
    "Verdant wilderness echoing with untamed calls and exotic biodiversity.",
    "Graceful creature found in forests, recognized for its antlers and gentle demeanor.",
    "A powerful and tender emotion that makes hearts flutter and brings warmth to every moment.",
    "An interactive platform for learning coding with hands-on projects.",
    "The language that powers dynamic web content and interactivity.",
    "Language used for designing the look and formatting of a document.",
    "A popular JavaScript library for building user interfaces.",
  ];
const wordsList = ["santa","christmas","jungle","deer","love","scrimba","javascript","css","react",]


function resetAll(){
    for(let i=0;i<wordArr.length;i++){
     document.querySelectorAll('.letter')[i].innerHTML='-';
    }
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    assignWord(wordsList[randomIndex]);
    displayHints(hintsList[randomIndex]);
    renderSpaces();
}
resetAll();

function displayHints(hint){
    document.getElementById('hints').innerHTML=hint;
}

function animateCong(){
    document.querySelector('.congrats').style.display="block";
}
function hide(e){
e.style.display="none";
}