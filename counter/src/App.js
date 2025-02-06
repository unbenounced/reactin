import "./index.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(1);

  function minusStep() {
    setStep((s) => s - 1);
  }

  function plusStep() {
    setStep((s) => s + 1);
  }

  function minusCounter() {
    setCounter((s) => s - step);
  }
  return (
    <div className="App">
      <div>
        <button onClick={minusStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={plusStep}>+</button>
      </div>
      <div>
        <button onClick={minusCounter}>-</button>
        <span>Counter: {counter}</span>
        <button>+</button>
      </div>
      <div>
        <p>days from today is Wed Jul 21 2027</p>
      </div>
    </div>
  );
}
