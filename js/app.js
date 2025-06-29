/*------------ Constants ------------------*/
const choice = ['rock', 'paper', 'scissors']


/*------------- Variables -----------------*/
let msg
let playerChoice
let computerChoice


/*------ Cached Element References ---------*/
const rockBtnEl = document.querySelector('#rock')
const paperBtnEl = document.querySelector('#paper')
const scissorsBtnEl = document.querySelector('#scissors')
const resultDisplayEl = document.querySelector('#result-display')


/*-------- Functions -----------------------*/
function getComputerChoice() {
    // generate a random number 0-2
    const randomIndex = Math.floor(Math.random() * choice.length)
    // select the item from the array
    return choice[randomIndex]
}

// initialize game state
function play() {
    computerChoice = getComputerChoice()
    playerChoice = event.target.id
    // after updating state, render to html
    compare()
    render()
}


// updates our UI/html directly
function render() {
    resultDisplayEl.textContent = `Computer chose ${computerChoice} 
    and you chose ${playerChoice}.${msg}`
}

function compare(){
  //compare 
  if(playerChoice === computerChoice)
    msg= "you are tied";
  else if (playerChoice === choice[0]&& computerChoice === choice[2])
    msg= "you win!";
  else if(playerChoice === choice[0] && computerChoice === choice[1]
  )
  msg=  "computer win!";
  else if(playerChoice === choice[1]&& computerChoice === choice[0])
    msg=  "you win!";
  else if(playerChoice === choice[1]&& computerChoice === choice[2])
    msg=  "computer win!";
  else if(playerChoice === choice[2]&& computerChoice === choice[0])
    msg=  "computer win!";
  else if(playerChoice === choice[2] && computerChoice === choice[1])
    msg=  "you win";
}

/*--------- Event Listeners ----------------*/
rockBtnEl.addEventListener('click', play)
paperBtnEl.addEventListener('click', play)
scissorsBtnEl.addEventListener('click', play)