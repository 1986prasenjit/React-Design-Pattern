import { useState } from "react";

function App() {
  //let count = 0;
  const [count, setCount] = useState(0);

  function increamentHandler() {
    let initialValue = 10;
    if(count >= initialValue){
      alert("You have reached the limit")
      return;
    }
    setCount((prevCount) => prevCount + 1);
    initialValue = initialValue + 1;
    console.log(`The initialValue value is ${initialValue}`);
  }
  function decreamentHandler() {
    let initialValue = 0;
    if(count === initialValue){
      alert("You have reached the limit")
      return;
    }
    setCount((prevCount) => prevCount - 1);
    initialValue = initialValue - 1;
    console.log(`The count value is ${initialValue}`);
  }
  return (
    <>
      <h1 style={{ color: "red", fontSize: "50px" }}>
        Hello from Abhishek and Shyamal
      </h1>
      <h2>The value of Count is: {count}</h2>
      <button onClick={increamentHandler}>Increment</button>
      <button onClick={decreamentHandler}>Decrement</button>
    </>
  );
}

export default App;
