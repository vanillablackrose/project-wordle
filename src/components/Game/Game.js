import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input';
import GuessList from '../GuessList';
import '../../styles.css';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [guess, setGuess] = React.useState('');
  const [won, setWon] = React.useState(false);

  function submitGuess(event) {
    event.preventDefault();

    let regex = /[A-Z]{5}/;

    if (regex.test(guess) && guess.length == 5) {
      const newGuess = {
        id: Math.random(),
        guess,
      };

      const newGuessList = [...guessList, newGuess];
      setGuessList(newGuessList);

      if (guess !== answer) {
        setGuess('');
      } else {
        setWon(true);
      }
    } else {
      alert('Error: Guess must be 5 letters long.');
    }
  }

  return (
    <>
      <Banner
        type={
          won
            ? 'win'
            : guessList.length === NUM_OF_GUESSES_ALLOWED
            ? 'lose'
            : 'empty'
        }
        answer={answer}
        tries={guessList.length}
      />
      <GuessList guessList={guessList} answer={answer} />
      <Input
        guess={guess}
        submitGuess={submitGuess}
        setGuess={setGuess}
        guessCount={guessList.length}
        won={won}
      />
    </>
  );
}

export default Game;
