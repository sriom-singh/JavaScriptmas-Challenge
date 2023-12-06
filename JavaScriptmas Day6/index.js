// -----------------------//
// JavaScriptmas Day6
// -----------------------//

const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]
// Coping element of people array into new array
const newArray = [...people];

// Function to shffleArray
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

 shuffleArray(people);

  // Function to making an Object
  function createObject(keys, values) {
    const result = {};
    keys.forEach((key, index) => {
      result[key] = values[index];
    });
    return result;
  }

const myObj = createObject(newArray,people)
console.log(myObj);
