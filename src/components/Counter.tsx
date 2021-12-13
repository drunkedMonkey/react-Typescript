import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const upCounter = (numberValue: number): void => {
    setCounter(counter + numberValue);
  };

  return (
    <div className="mt-5">
      <h3>Counter: useState</h3>
      <span>Value: {counter}</span>
      <br />
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => upCounter(1)}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => upCounter(2)}
      >
        +2
      </button>
      <button
        className="btn btn-outline-danger mt-2"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};
