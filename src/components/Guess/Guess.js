import React from 'react';
import { range } from '../../utils';
import '../../styles.css';
import { checkGuess } from '../../game-helpers';

function Guess({ word = '', row, answer }) {
  var result;
  if (word !== '') {
    result = checkGuess(word, answer);
  }

  return (
    <p className="guess" key={'row' + row}>
      {range(5).map((num) => (
        <span
          className={
            word !== '' ? 'cell ' + result[num].status : 'cell'
          }
          key={row + '_' + num}
        >
          {word !== '' && word[num]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
