const getUserChoice = userInput => {

  // Check valid input
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log("Error!");
  }
};

//TEST getUserChoice Function
// getUserChoice('rock');

function getComputerChoice() {
  var randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0: return 'rock';
      break;
    case 1: return 'paper';
      break;
    case 2: return 'scissors';
      break;
    default:
      console.log("Uh Oh...")
  }
}

// //TEST getComputerChoice Function
// console.log(getComputerChoice());


function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) { //ties
    return "The game is a tie!";
  } else if (userChoice === 'rock') { //paper vs rock
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  } else if (userChoice === 'paper') { //paper vs scissors
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  } else if (userChoice === 'scissors') { //scissors vs rock
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
};

function displayWinner(winner) {
  document.getElementById("output").innerHTML = winner;
  console.log(winner);
};

function displayCompChoice(compChoice) {
  const element = document.getElementById("placeholder");
  if (compChoice === 'scissors') {
    element.className = "scissors w-100";
  }
  else if (compChoice === 'paper') {
    element.className = "paper w-100";
  }
  else {
    element.className = "rock w-100";
  }
}
// TESTING
//
//

function playGame(choice) {
  var userChoice = getUserChoice(choice);
  var computerChoice = getComputerChoice();
  displayCompChoice(computerChoice);
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  displayWinner(determineWinner(userChoice, computerChoice));
};