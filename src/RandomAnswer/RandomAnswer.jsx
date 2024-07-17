import React, { useState } from 'react';

const RandomAnswer = (props) => {
  const [answer, setAnswer] = useState('მკითხე რაც გინდა');

  const changeAnswer = (prev) =>
    setAnswer(
      (prev = props.answers[Math.floor(Math.random() * props.answers.length)])
    );
  return (
    <>
      <input type='text' placeholder='Ask a question' />
      <button onClick={changeAnswer}>Ask</button>
      <p>{answer}</p>
    </>
  );
};

export default RandomAnswer;
