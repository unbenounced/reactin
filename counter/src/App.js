import "./index.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);

  function minus() {
    setStep((s) => s - 1);
  }

  return (
    <div className="App">
      <div>
        <button onClick={minus}>-</button>
        <span>Step: {step}</span>
        <button>+</button>
      </div>
      <div>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
      <div>
        <p>days from today is Wed Jul 21 2027</p>
      </div>
    </div>
  );
}
