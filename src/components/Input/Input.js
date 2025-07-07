import React from 'react';
import '../../styles.css';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Input({ guess, setGuess, submitGuess, guessCount, won }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        if (NUM_OF_GUESSES_ALLOWED == guessCount) {
          alert('Game over! No more guesses allowed!');
        } else {
          submitGuess(event);
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        required
        minlength={5}
        maxLength={5}
        onChange={(event) =>
          setGuess(event.target.value.toUpperCase())
        }
        disabled={won || NUM_OF_GUESSES_ALLOWED === guessCount}
      />
    </form>
  );
}

export default Input;
