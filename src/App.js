import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
const [count, setCount] = useState(0);
const [current, setCurrent] = useState("Input Text Here!");

const [messages, setMessages] = useState([]);

function handleChange(event){
  console.log(event.target.value)
  setCurrent(event.target.value)
}

const increase = () => {
  let currentValue = count;
  let newValue = currentValue + 1
  setCount(newValue)
  console.log(newValue)
}

let myMessageList = (<div class="messagePopup">
your message appears here!
{messages[0]}
</div>)

//HOW DO I onClick change the background color?
//HOW DO I add a background image to each button?
//HOW DO I add a background image to the entire app?
  return (
    <div className="appContainer">
      

      <div className="countLabel">
            you have {count} coffee beans
      </div>

      <div className="clickMe">
           <button onClick={increase}>Click me!</button>
      </div>

      <div className="resetMe">
          <button onClick={() => {
            setCount(0)
          }}>Reset me!</button>
      </div>

      <div className="textDiv">
            <textarea value={current} onChange={handleChange}></textarea>

            <button onClick={() => {
              let messageArr = messages;
              messageArr.unshift(current)
              setMessages(messageArr)
              console.log(messageArr)
            }}>submit your message!</button>
      </div>

            {myMessageList}

    </div>
  );
}

export default App;
