import { useCallback, useEffect, useState } from "react"



const FunctionMemorization = () => {

  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);
  

  const noneCallback = () => {
    console.log(number)
  }

  /* 
      함수 생성이 불필요하게 게속 될 때 useCallBack 을 이용하게 된다.
      함수를 memorization 해서 사용할 수 있다.
  */

      // 스냅샷을 넣어둘 변수 공간이 필요해서 단독으로 쓰지 않음. ( 훅스 안에서 훅스 쓸 수 없음)

 const printNumber = useCallback(()=>{       // 렌더링 시 스냅샷을 찍어두고 number 가 변하면 다시 렌더링하며 새롭게 스냅샷을 찍음
    console.log('current number : ' + number);
 },[number]);    // 의존성 배열 자리에 빈 배열을 두게 되면 마운트 시점에 한번 지역변수 초기화를 위해 사용되고
 //                 나서 함수는 새로 정의 되지 않으므로 항상 number 의 초기값인 0만 나오게 된다.

 useEffect(()=>{
  console.log("printNumber 의 값 변화 인지됨");
 }, [printNumber]);

 return (
  <>
      <input
          type="number"
          value={number}
          onChange={e => setNumber(e.target.value)}/>
      <button onClick={() => setToggle(!toggle)}>{String(toggle)}</button>    
      <br/>
      <button onClick={printNumber}>printNumberState</button>
      <button onClick={noneCallback}>printNumberState</button>

  </>
 )

}

export default FunctionMemorization;