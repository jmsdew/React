import { useEffect, useReducer, useState } from "react"

const reducer = (state,action)=>{
  return{
    ...state,
    [action.name] : action.value
  }
}

const Start = () =>{
  const [state, dispatch] = useReducer(reducer,{
    answer : ''
  });
  const [isTrue, setIsTrue] = useState(false);
  const cha = "보리차";

  const answerChange = e => dispatch(e.target);

  const ans = () => {
      if(state.answer === cha){
        setIsTrue(r => !r);
      }else {
        alert("틀렸습니다.")
        dispatch({name : 'answer', value : ''});
      }
  }

  useEffect(()=>{
    if(isTrue === true){
      alert("정답입니다.");
      dispatch({name : 'answer', value : ''});
    }else {
      alert("환영합니다.")
    }
  },[isTrue])
  

    return (
      <>
          <h1>마시는 차 이름은?</h1>
          <input type="text" name="answer" onChange={answerChange} value={state.answer}></input>
          <button onClick={ans}>제출하기</button>
          <h1>입력한 값 : {state.answer}</h1>

      </>
    )

}

export default Start;