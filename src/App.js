import './App.css';
import React, { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const Number1 = function (e) {
    setNumber1(Number(e.target.value));
  };

  const Number2 = function (e) {
    setNumber2(Number(e.target.value));
  };

  const Addition = function () {
    setResult(number1 + number2);
  };

  const Subtraction = function () {
    setResult(number1 - number2);
  };

  const Multiplication = function () {
    setResult(number1 * number2);
  };

  const Division = function () {
    setResult(number1 / number2);
  };

  return (
    <div className="counter-container">
      <h3>Enter Two Numbers to Perform Operations:</h3>
      <div className="input-container">
        <input type="number" value={number1} onChange={Number1} />
        <input type="number" value={number2} onChange={Number2} />
      </div>
      <div className="buttons">
        <button onClick={Addition}>Addition (+)</button>
        <button onClick={Subtraction}>Subtraction (-)</button>
        <button onClick={Multiplication}>Multiplication (*)</button>
        <button onClick={Division}>Division (/)</button>
      </div>
      <div className= "result">
        Result: {result}
      </div>
    </div>
  );
}

export default App;
