const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const allList = document.querySelector('.all-list')

// btn.addEventListener("click", sort)

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/
function showItems(){
    let data = "";
for(let i in sorteesArr){
    data +=`<li> ${sorteesArr[i].name} </li>`
    }
    allList.innerHTML =` <li><h1>All Names</h1></li><hr/>${data}`;
    data="";
}

showItems()

function sortItem(){
document.querySelector('.all').style.display="none"
document.querySelector('.nice').style.display="block"
document.querySelector('.naughty').style.display="block"
document.querySelector('.add').style.display="none"

const nice = sorteesArr.filter(item => item.hasBeenGood === true)
const naughty = sorteesArr.filter(item => item.hasBeenGood === false)

let data="";
for(let key in nice){
     data +=`<li> ${nice[key].name} </li>`
}
niceList.innerHTML =`<li><h1>Nice List</h1></li><hr/>${data}`;

let data2 ="";
for(let key in naughty){
    data2 +=`<li> ${naughty[key].name} </li>`
}
naughtyList.innerHTML= `<li><h1>Naughty List</h1></li><hr/>${data2}`
}


function deleteItem(){

}
function getRandomBoolean() {
    return Math.random() < 0.5; // Adjust the threshold for a different probability
  }
  
function openInput(){
document.querySelector('.add').style.display="block"
}

function addItem(){
  const newItem = { name: document.querySelector('input').value,hasBeenGood:getRandomBoolean() }; // You can customize the initial properties
    sorteesArr.push(newItem);
    console.log('Item added:', newItem);
    console.log('Updated array:', sorteesArr);
    showItems()
    document.querySelector('.add').style.display="none"

}