import { useEffect, useState } from "react";

export const Question = () => {
  const [isDone, setIsDone] = useState(false);

  const [input, setInput] = useState("");
  const answer1 = '깐부치킨';

  const ChangeQ = (e) =>{
    setInput(e.target.value);
  }
  const answer = () =>{
    if(answer1 === input){
    setIsDone(!isDone);}
  }

  useEffect(()=>{
    if(input === answer1){
      alert("정답입니다");
      setInput("");
    }else{
     alert("환영합니다");
    }
  },[isDone])
  return(
    <>
        <h1>문제 - 우리반 사람들이 가장 많이 술을 마신 장소는?</h1>
        <input type="text" onChange={ChangeQ} value={input}/>
        <button onClick={answer}>제출</button>
      
    </>
  )
}
