const xmasGifts = ['guitar 🎸', 'skates ⛸️', 'bear 🧸', 'magnet 🧲', 'scarf 🧣','laptop 💻', 'games console 🎮 ', 'jewellery 💍', 'kite 🪁']

/**
 *  Sort the array twice. Alphabetically and reverse alphabetically.  
 **/

const sortedAZ = []
/* Sorting  in ascending order */
xmasGifts.forEach(element => sortedAZ.push(element));
sortedAZ.sort();
console.log('A-Z: ', sortedAZ) ;

const sortedZA =[] 
/* Sorting  in descending order */
xmasGifts.forEach(element => sortedZA.push(element));
sortedZA.sort((a,b)=>b.localeCompare(a));
console.log('Z-A: ', sortedZA) ;









const ascending = document.querySelector('.ascending')
console.log(ascending)
for (let i = 0; i < sortedAZ .length; i++) {
    ascending.innerHTML += `<li>${sortedAZ[i]}</li>`;
}     

const descending = document.querySelector('.descending')
console.log(descending)
for (let i = 0; i < sortedAZ .length; i++) {
    descending.innerHTML += `<li>${sortedZA[i]}</li>`;
}     