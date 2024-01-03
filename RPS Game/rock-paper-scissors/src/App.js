// src/App.js

import React, { useState } from 'react';
import './App.css';

import rockImage from './rock.jpeg';
import paperImage from './paper.jpg';
import scissorImage from './scissor.jpeg';

const choices = ['rock', 'paper', 'scissors'];

const images = {
  rock: rockImage,
  paper: paperImage,
  scissors: scissorImage,
};

const determineWinner = (playerChoice, computerChoice, scores) => {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    scores.player += 1;
    return 'You win!';
  } else {
    scores.computer += 1;
    return 'Computer wins!';
  }
};

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [scores, setScores] = useState({ player: 0, computer: 0 });

  const handleChoice = (choice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];

    setPlayerChoice(choice);
    setComputerChoice(computerRandomChoice);

    const winner = determineWinner(choice, computerRandomChoice, scores);
    setResult(winner);
  };

  const handleRestart = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult('');
    setScores({ player: 0, computer: 0 });
  };

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
      <div>
        <p>Your Choice: {playerChoice && <img src={images[playerChoice]} alt={playerChoice} />}</p>
        <p>Computer's Choice: {computerChoice && <img src={images[computerChoice]} alt={computerChoice} />}</p>
        <p>{result}</p>
        <p>Your Score: {scores.player}</p>
        <p>Computer Score: {scores.computer}</p>
      </div>
      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default RockPaperScissors;
