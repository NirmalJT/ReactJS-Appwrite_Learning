import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    //a bundle of task will be gone so they take is as a same task so it will only increase one value
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    //but if we neceserly want to increase like this then we use prevCount whihc is a callback in setCount
    //When we call setCount multiple times in a row, React batches the updates.  using the functional form (prevCount => prevCount + 1), it should work correctly,
    setCount((prevCount) => {
      console.log(prevCount);
      return prevCount + 1;
    });
    // short way to write
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const removeValue = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>ReactJs InterView Question</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>Increase</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease</button>
    </>
  );
}

export default App;
