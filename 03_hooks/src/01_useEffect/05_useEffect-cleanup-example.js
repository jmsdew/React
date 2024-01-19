import { useEffect, useState } from "react"

const Timer = () =>{

  useEffect(()=>{
    console.log("타이머가 시작됨");
    const timer = setInterval(()=>{
      console.log(new Date().toLocaleTimeString());
    }, (1000));

    return () => {  // 자바스크립트는 싱글스레드 이기 때문에 setInterval이 1초마다 실행되면 넘어가지 못하고 타이머 종료 시 리턴값이 출력됨
      clearInterval(timer);
      console.log("타이머");    // 함수형 컴포넌트는 2회 실행된다. 1회는 어떤 내용이든 한번 실행한 후 2회때부터 동작
    }
  },[]);

  return <h1>타이머를 시작합니다.</h1>
}

export const Container = () =>{
  const [isTrue, setIsTrue] = useState(false);

  return(
    <>
        <button onClick={()=>{setIsTrue(!isTrue)}}>타이머 토글</button>
        {isTrue && <Timer/>}
    </>
  )
}