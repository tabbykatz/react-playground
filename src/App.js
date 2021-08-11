import "./App.css";
import React, { useState } from "react";
import Cat from './Cat';

const text = "How many cats is the right number?";
const low = "You have chosen poorly. Adopt cats please.";
const high = "You have chosen wisely.";
const perfect = "This is the ideal number of cats! Lucky you!";

function App() {
  const [count, setCount] = useState(0);
  const [choice, setChoice] = useState(" ");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function clearCounter() {
    setCount(0);
    setChoice("");
  }

  function giveAnswer() {
    count < 1
      ? setChoice(low)
      : count === 7
      ? setChoice(perfect)
      : setChoice(high);
  }

  return (
    <>
      <h1>{text}</h1>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <button onClick={clearCounter}>clear</button>
      <button onClick={giveAnswer}>enter</button>
      <h1>{choice}</h1>
      <Cat />
    </>
  );
}

export default App;
