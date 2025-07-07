import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import '../../styles.css';

function GuessList({ guessList, answer }) {
  return (
    <div className="guess-results" value={guessList}>
      {guessList.map((guess, index) => {
        return (
          <Guess
            className="{styles.guess}"
            key={guess.id}
            word={guess.guess}
            row={index}
            answer={answer}
          />
        );
      })}
      {range(NUM_OF_GUESSES_ALLOWED - guessList.length).map((num) => {
        return (
          <Guess
            className="guess"
            row={num}
            key={'empty_guess' + num}
            answer={answer}
          />
        );
      })}
    </div>
  );
}

export default GuessList;
