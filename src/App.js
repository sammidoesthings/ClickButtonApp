import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
const [count, setCount] = useState(0);
const [paragraph, setParagraph] = useState("Input Text Here!");

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
        <div className="clickMe">
           <button onClick={increase}>Click me!</button>
        </div>

      <div className="resetMe">
          <button onClick={() => {
            setCount(0)
          }}>Reset me!</button>
      </div>

      <div className="countLabel">
            {count} clicks
      </div>
      <div className="textArea">
            <textarea value={paragraph} onChange={handleChange}></textarea>
      </div>



    </div>
  );
}

export default App;
