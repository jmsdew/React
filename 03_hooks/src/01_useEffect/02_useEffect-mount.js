import {useEffect, useState} from "react";
/* 
    useEffect 는 기본적으로 마운트 된 시점과 업데이트 된 시점 두 가지 모두 동작하게 된다.
    마운트 될 때만 동작하고 업데이트 시에는 동작하지 않게 컨트롤 할 수 있다.
*/


const UseEffectMount = () =>{
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(()=>{
    console.log("마운트 시점에만 동작함");
  },
    [] // 두 번째 인자로 빈 배열을 넣으면 업데이트 시점에는 더 이상 동작하지 않고 마운트(렌더링 이후) 에만 동작함. shouldcomponentUpdate 대체
        // useEffect 가 발생할 조건을 거는 배열 [time] 으로 해 두면 time 의 상태(state)가 바뀔때마다 useEffect 발생
  );

  return (
    <>
        <button onClick={()=>setTime(new Date().toLocaleTimeString())}>
            현재시간 확인하기
        </button>
        <h1>{time}</h1>
    </>
  );
};

export default UseEffectMount;