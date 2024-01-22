import { useState } from "react";

/* 
    클라이언트 쪽에서 많은 연산을 시킬 수 있지만, 그 문제로 화면의 렌더링이 그만큼 늦어진다.

    의문 : 그렇다면 setTimeout 으로 루프를 막아버리면?
*/


const hardCalculator = (num) => {
/*   console.log("어려운 계산"); */

  /*  for(let i =0; i <995699999; i++){     // 싱글쓰레드기 때문에 순서대로 for문은 끝날때까지 점유해야함

   } */
   /* setTimeout(()=>{console.log("어려운 계산")}, 3000);   //  (event oop에 넣어두고) 3초 동안 다른 일 처리 후 쓰레드 점유
   return num + 995699999; */
    // react 는 자식 요소에 promise 객체를 가질 수 없다.   (async, await)등  에러 발생
  
   const timeValue = setTimeout(()=>{return 995699999}, 3000); 
   console.log(timeValue);
   return num + timeValue;
}

const HardCalculator = () => {
    const [hardNumber, setHardNumber] = useState(0);
    const hardSum = hardCalculator(hardNumber);
  return (
    <>
        <h3>어려운 계산기</h3>
        <input type="number"
              value={hardNumber}
              onChange={e => setHardNumber(parseInt(e.target.value))}/>
        <span>+995699999 = {hardSum}</span>
    </>
  );
}

export default HardCalculator;