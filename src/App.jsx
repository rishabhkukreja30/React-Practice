import { useContext, useState } from "react";
import { CountContext } from "./context";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms";

function App() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <SetCountComponent />
    </div>
  );
}

function CountRenderer({}) {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function SetCountComponent() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
