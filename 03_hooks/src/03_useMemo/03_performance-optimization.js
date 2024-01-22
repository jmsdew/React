import { useMemo, useState } from "react";


const hardCalculator = (num) => {
  console.log("어려운 계산기");

  for(let i = 0; i < 1999999999; i++){
  }
  return num + 10000;
}

const easyCalculator = (num) => {
  console.log("쉬운 계산기");

  return num +1;
}


const UseMemoComponent = () => {
  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);

  const hardSum = useMemo(()=>{     // 연산 수행식을 useMemo에 저장. harNumber의 값이 변경되면 연산 수행식을 다시 저장함. 안바뀌면
                                    // 재렌더링되어도 그냥 호출해서 씀
    return hardCalculator(hardNumber);
  }, [hardNumber]);
  const easySum = useMemo(()=>{
    return easyCalculator(easyNumber);
  }, [easyNumber]);

  return (
      <>
          <input
              type="number"
              value={hardNumber}
              onChange={e => setHardNumber(parseInt(e.target.value))}
              />
          <span>+ 10000 = {hardSum}</span>    
          <h3>쉬운 계산기</h3>
          <input
              type="number"
              value={easyNumber}
              onChange={e => setEasyNumber(parseInt(e.target.value))}         // 값이 바뀌며 재렌더링이 일어남. 어려운계산기도 재할당되며 for문 재실행
              />
          <span>+ 1 = {easySum}</span>    

      </>

  );
}

export default UseMemoComponent;

//exports 를 쓰면 배열로 여러 컴포넌트 내보내기 가능