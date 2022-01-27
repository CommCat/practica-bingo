
import "../css/style.css";

import { shuffle } from "./utils";


//
const computersBingoCard = [];
const calledNumbers = [];
//const allNums = [];

//function createCard() {
  //creates a new array with 90 undefined elements
  function range(start, end){
    return Array(end - start + 1).fill(0).map((x, i) => i + 1);
  }
  const allNums = range(1, 90)
  console.log(allNums)

  
 function createPlayersCard(){
  return shuffle(allNums).slice(0, 15);
 }
console.log(createPlayersCard());

function createComputersCard(){
  return shuffle(allNums).slice(30, 45);
 }
console.log(createComputersCard());



 //console.log(allNums);


 //const playersBingoCard = [allNums.slice(0, 15)]
 //console.log(playersBingoCard)
    
  //create new array of first 15 numbers
 // return shuffle(allNums).slice(0, 15);
  

  //const playersBingoCard = [allNums.slice(0, 15)]
  //console.log(playersBingoCard);



/*
function addNumbersToCard(arrayNumbers) {
  // aqui gestionamos la logica de pintar el HTML en el DOM
}

function changeNumberColour(numero) {}


function drawNumber() {
    const randomNumber = Math.floor(Math.random() * 90) + 1;
    calledNumbers.push(randomNumber);
    const showNumber = document.getElementById("showNumber");
    showNumber.innerHTML = randomNumber
}

const draw = document.getElementById("button");

button.addEventListener("click", function(){
    const draw = drawNumber();
    return draw;
    
    });

    console.log(calledNumbers)



function checkWinner(bingoCard, calledNumbers) {}
*/
