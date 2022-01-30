
import "../css/style.css";

import { shuffle } from "./utils";

const player = document.querySelector(".playersCard")
const computer = document.querySelector(".computersCard")
const button = document.querySelector(".button")
const drawnNumber = document.querySelector(".callNumber");
const listNumbers = document.querySelector(".showAll");


let playersCounter = 0;
let computersCounter = 0;




  const allNums = Array(90)
    .fill(0)
    .map((x, i) => i + 1);
 
  const playersArray = shuffle(allNums).slice(0, 15);
  const computersArray = shuffle(allNums).slice(0, 15);
  const bingoNumbers = shuffle(allNums)

  console.log(playersArray)
  console.log(computersArray)
  console.log(bingoNumbers)

  
  printArray(playersArray, "player")
  printArray(computersArray, "computer")

 function printArray(array, type){
   for(let x = 0; x <=array.length-1; x++){
     let p = document.createElement("p");
     p.className = `number number${array[x]}`
     p.textContent = array[x]
     let div;
     if (x <= 4){
       div = document.querySelector(`.container-line1-${type}`)
     }else if (x <= 9){
      div = document.querySelector(`.container-line2-${type}`)
     }else if (x <= 14){
      div = document.querySelector(`.container-line3-${type}`)
     }
     div.appendChild(p);  
   }
 }
 

button.addEventListener("click", ()=> pullNumber())

function pullNumber() {
  const bingoCalledNumber = bingoNumbers.shift();
  drawnNumber.textContent = bingoCalledNumber;
  listNumbers.textContent += `  ${bingoCalledNumber}`;
  crossOut(bingoCalledNumber);
  }

function crossOut(bingoCalledNumber){
  let crossOff = document.querySelectorAll(`.number${bingoCalledNumber}`)
  crossOff.forEach(element =>{
    element.classList.add("crossedOff")
  });
    for(let i = 0; i <=15; i++){
    if (playersArray[i] === bingoCalledNumber){
      playersCounter++;
      checkWinner(playersCounter, "You're a winner!")
      }
    if(computersArray[i] === bingoCalledNumber){
      computersCounter++;
      checkWinner(computersCounter, "You're a LOSER!")
      }
  }
}
function checkWinner(counter, message){
  if(counter === 15){
    alert(message);
    button.remove();
  }
}



