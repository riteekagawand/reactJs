
import './App.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = (value) => {
    setCount(prevCount => prevCount + value);
  };
  
  const decrement = (value) => {
    setCount(prevCount => prevCount - value);
  };
 

  

  return (
    <div className="counter-container">
      <h3> Enter Number to Perform Operations:</h3>
      <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} />
      <div className="buttons">
        <button onClick={() => increment(1)} >  + 1   </button>
        <button onClick={() => decrement(1)} >  - 1  </button>
        <button onClick={() => increment(10)} > +10 </button>
        <button onClick={() => decrement(10)} >-10 </button>
      </div>

    </div>
  );
}

export default App;
