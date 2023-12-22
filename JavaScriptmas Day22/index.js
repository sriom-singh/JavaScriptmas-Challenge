let people = []

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const peopleListEl = document.getElementById("people-list")
inputFieldEl.addEventListener("click", function(){
    document.getElementById('image').src="icon.png"
})

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    if (inputValue) {
        localStorage.setItem(inputValue,`Person`)
        people.push(inputValue)

        clearInputFieldEl()
        
        renderList(people)
    }
})

function renderList() {
    clearPeopleListEl()
    
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            let currentPerson = key;
            appendPersonToPeopleListEl(key)
        }
    }
//   (Object.keys(localStorage))
    console.log(localStorage)
}

renderList()

function clearPeopleListEl() {
    peopleListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendPersonToPeopleListEl(person) {
    
    let newEl = document.createElement("li")
    
    newEl.textContent = person
    
    newEl.addEventListener("dblclick", function() {
        let index = people.indexOf(person)
        localStorage.removeItem(person)
        people.splice(index, 1)
        document.getElementById('image').src="https://media2.giphy.com/media/mF3Z08f0OjfvwMEFxv/200w.webp?cid=ecf05e47zqpuqwzkieliye5og446bdngk07srt7w0y7pdwqy&ep=v1_gifs_search&rid=200w.webp&ct=g"
        renderList(people)

    })
    
    peopleListEl.append(newEl)
}