import { useState } from "react"


const CounterRef = () => {
  const [counter, setCounter] = useState(0);

  console.log("counter 렌더링 됨");

  const increseCount=()=>{
    setCounter(counter +1);
  }
  
  return (
    <>
        <h1>Counter : {counter}</h1>
        <button onClick={increseCount}>카운트 증가</button>
    </>
  );
}

export default CounterRef;