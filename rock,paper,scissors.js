const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('ERROR');
    }
    function getComputerChoice() {
      Math.floor(Math.random() * 3);
      switch (randomNumber) {
        case 0:
      return 'rock';
        case 1:
      return 'paper';
        case 2:
      return 'scissors';
                          
          }
    }
    function determineWinner(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        return 'The game is a tie breaker , better luck next time'
      } if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
            return 'BOOOOO, Computer Won!';
          } else {
            return 'YEY, Way to go Champ';
          }
      }
       if (userChoice === 'paper') {
         if (computerChoice === 'scissors') {
           return 'Son Of a Bitch, lost again!';
         } else {
           return ' You Rock Yihaaa';
         }
       }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'This SUCKS!'
        } else {
          return 'Yeah, yeah ,yeah we WON!';
        }
      }
      const playGame = () => {
        const userChoice = getUserChoice('scissors');
        const computerChoice = getComputerChoice();
      console.log('You threw: ' + userChoice);
        console.log('The computer threw: ' + computerChoice);
        
        console.log(determineWinner(userChoice, computerChoice));
      }
      }
    playGame();
  }