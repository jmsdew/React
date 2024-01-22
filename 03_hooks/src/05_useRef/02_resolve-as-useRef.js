import { useRef, useState } from "react";


const UseRefCounter = () => {

    console.log("useRefCounter  렌더링 됨");

    const [count, setCount] = useState(0);

    let variable = 0;       // 렌더링 마다 초기화됨

    const countRef = useRef(0);          // 렌더링 시키지 않음

    const increseCount = () => {
      setCount(count+1);
    }
    const increseVariable = () => {
      variable += 1;
      console.log("variable : " +variable);
    }

    const increseCountRef = () =>{
      countRef.current = countRef.current+1;           // current : useRef가 가리키는 현재 값을 의미함
      console.log("카운트ref : " + countRef.current);
    }

    return (
      <>
          <h1>counter : {count}</h1>
          <h1> variable : {variable}</h1>
          <h1>countRef : {countRef.current}</h1>
          <button onClick={increseCount}>카운트 증가</button>
          <button onClick={increseVariable}>variable 증가</button>
          <button onClick={increseCountRef}>카운트 Ref 증가</button>
      
      </>
    )
}

export default UseRefCounter;