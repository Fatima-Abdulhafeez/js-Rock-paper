/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors'];

/*-------------------------------- Variables --------------------------------*/

let playerChoice;
let computerChoice; 
let msg;

/*------------------------ Cached Element References ------------------------*/

const rockbtn = document.querySelector("#rock");
console.log(rockbtn);
const paperbtn = document.querySelector("#paper");
console.log(paperbtn);
const secisorbtn = document.querySelector("#scissors");
console.log(secisorbtn);

/*-------------------------------- Functions --------------------------------*/
function getComputerChoice(){
    //genarate random nuber 0-2 for array
    const ransomIndex = Math.floor(Math.random()*choices.length);
    
    console.log(ransomIndex)
    // selects the item from the array

}

getComputerChoice();

function play(){
    
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    getComputerChoice();
    console.log("co",computerChoice);
    //after updating state, render to html
    render()
}
play();

//updates our ui 
function render(){

}

/*----------------------------- Event Listeners -----------------------------*/