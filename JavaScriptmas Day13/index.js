/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

const input= document.getElementById('num-input');
const submit=document.getElementById('btn');

const christmasNonVegDinnerNames = [
    "Savory Roast Delight",
    "Grilled Turkey Extravaganza",
    "Festive Seafood Feast",
    "Holiday Ham Bonanza",
    "Roasted Duck Celebration",
  ];

  const christmasVegDinnerNames = [
    "Joyful Veggie Feast",
    "Festive Veg Fare",
    "Merry Veg Mingle Meal",
    "Yuletide Veg Banquet",
    "Holiday Harmony Veg Dinner",
    "Season's Veg Eatings Extravaganza",
    "Jingle Bell Veg Feast",
    "Winter Wonderland Veg Dinner",
    "Fireside Veg Feast"];
  // Example: Randomly select and log a dinner name

// const receipe =;
function suggestDish(){
    const checkbox = document.getElementById('vegetarian-input')
    if(checkbox.checked){
        const randomNumber = christmasVegDinnerNames[Math.floor(Math.random() * christmasVegDinnerNames.length)];
        document.getElementById('dish-name').innerHTML=`${randomNumber}`  
    }
    else{
        const randomNumber = christmasNonVegDinnerNames[Math.floor(Math.random() * christmasNonVegDinnerNames.length)];
        document.getElementById('dish-name').innerHTML=`${randomNumber}`

    }
}
// const image = ;
const dialog=document.getElementById('dialog1')
function closeDialog() { 
    dialog.style.display="none" ;
  } 
  function showDialog() { 
    console.log(input.value)
    if(input.value== 0){
        return
    }
    dialog.style.display="flex" ;
    document.querySelector("span>span").innerHTML=`${input.value}`;
    suggestDish();
  } 

function showReceipe(){
   document.querySelector('.embed').style.display="block"
}

