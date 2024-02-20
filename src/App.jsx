import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <div>{count}</div>

      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Subtract
        </button>
      </div>
    </div>
  );
}

export default App;
