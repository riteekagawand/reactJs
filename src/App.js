import './App.css';
import React, { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1Change = function (e) {
    setNumber1(Number(e.target.value));
  };

  const handleNumber2Change = function (e) {
    setNumber2(Number(e.target.value));
  };

  const handleAddition = function () {
    setResult(number1 + number2);
  };

  const handleSubtraction = function () {
    setResult(number1 - number2);
  };

  const handleMultiplication = function () {
    setResult(number1 * number2);
  };

  const handleDivision = function () {
    setResult(number1 / number2);
  };

  return (
    <div className="counter-container">
      <h3>Enter Two Numbers to Perform Operations:</h3>
      <div className="input-container">
        <input type="number" value={number1} onChange={handleNumber1Change} />
        <input type="number" value={number2} onChange={handleNumber2Change} />
      </div>
      <div className="buttons">
        <button onClick={handleAddition}>Addition (+)</button>
        <button onClick={handleSubtraction}>Subtraction (-)</button>
        <button onClick={handleMultiplication}>Multiplication (*)</button>
        <button onClick={handleDivision}>Division (/)</button>
      </div>
      <div className= "result">
        Result: {result}
      </div>
    </div>
  );
}

export default App;
