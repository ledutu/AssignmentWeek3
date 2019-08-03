import {CHOICES} from "./constants"

const randomComputerChoice = () =>
    CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutCome = (userChoice, computerChoice) =>
{
  let result;

  if(userChoice === 'rock')
  {
    result = computerChoice === 'scissors' ? 'Victory!': 'Defeat!';
  }
  if(userChoice === 'paper')
  {
    result = computerChoice === 'rock' ? 'Victory!': 'Defeat!';
  }
  if(userChoice === 'scissors')
  {
    result = computerChoice === 'paper' ? 'Victory!': 'Defeat!';
  }
  if(userChoice === computerChoice)
  {
    result = 'Tie Game!'
  }
  return result;
}

export 
{
    randomComputerChoice, 
    getRoundOutCome
}