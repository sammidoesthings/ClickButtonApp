import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
const [count, setCount] = useState(0);
const [paragraph, setParagraph] = useState("empty");

function handleChange(event){
  console.log(event.target.value)
  setParagraph(event.target.value)
}

const increase = () => {
  let currentValue = count;
  let newValue = currentValue + 1
  setCount(newValue)
  console.log(newValue)
}


  return (
    <div className="appContainer">
        <button onClick={increase}>Click me!</button>
        <button onClick={() => {
          setCount(0)
        }}>Reset me!</button>
            {count}
            clicks
            <textarea value={paragraph} onChange={handleChange}></textarea>
    </div>
  );
}

export default App;
