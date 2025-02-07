import "./index.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  const today = new Date();

  function minusStep() {
    if (step > 0) setStep((s) => s - 1);
  }

  function plusStep() {
    setStep((s) => s + 1);
  }

  function minusCounter() {
    setCounter((s) => s - step);
  }

  function plusCounter() {
    setCounter((s) => s + step);
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
        <button onClick={plusCounter}>+</button>
      </div>
      <div>
        <p>
          {counter} {counter === 1 ? "day" : "days"} from today is{" "}
          {today.setDate(today + counter)}
        </p>
      </div>
    </div>
  );
}
