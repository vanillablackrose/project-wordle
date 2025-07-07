import React from 'react';
//import '../../styles.css';

function Banner({ type, tries = 0, answer }) {
  if (type === 'win') {
    return (
      <div className="happy banner" key="banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{tries} guesses</strong>.
        </p>
      </div>
    );
  } else if (type === 'empty') {
    return <div key="banner"></div>;
  } else {
    return (
      <div className="sad banner" key="banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
