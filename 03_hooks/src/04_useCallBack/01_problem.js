import { useEffect, useState } from "react"


const CallBackProblem = () =>{

  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);

  const printNumber = () => {
    console.log(`current number : ${number}`);       // number가 변하면 함수가 변했다고 판단
  }

  /* 
      number 또는 toggle state 가 변경될 때 함수 생성이 다시 되는 것은 불필요하다.
      하지만 매번 함수가 다시 생성되어 반환되고 useEffect 에서는 해당 지역 변수에 변화가 있다고 인지하게 된다.
  */

      useEffect(()=>{
        console.log("printNumber 값 변화 인지됨");
      }, [printNumber]);

      return(
        <>
            <input  
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />

            <button onClick={()=>setToggle(r => !r)}>{String(toggle)}</button>
              {/* state가 변경됨에 따라서 렌더링이 다시 일어나 함수가 다시 생성되며 주소값 재 할당이 일어남. 주소값 변경 -> useEffect 실행 */} 
          
            <br/>
            <button onClick={printNumber}>printNumberState</button>
        </>
      )
}

export default CallBackProblem;