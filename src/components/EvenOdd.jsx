import React, { useState } from 'react';

const GenerateRandomNumber = () => {
  const [result, setResult] = useState('');

  const generateRandomNumbers = () => {
    new Promise((resolve, reject) => {
      var randomNumber = Math.floor(Math.random() * 100);
      setTimeout(() => {
        if (randomNumber % 2 === 0) {
          resolve(randomNumber);
        } else {
          reject(randomNumber);
        }
      }, 3000);
    })
    .then((even) => {
      setResult(`This is an even number: ${even}`);
    })
    .catch((odd) => {
      setResult(`This is an odd number: ${odd}`);
    });
  };

  return (
    <div>
      <button onClick={generateRandomNumbers}>Generate Random Number</button>
      <p>{result}</p>
    </div>
  );
  
};

export default GenerateRandomNumber;
