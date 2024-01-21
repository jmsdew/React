import { useReducer, useState } from "react"

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  
  const plus = () =>{
    setCounter(r => r+1);
  }

  const minus = () => {
    setCounter(r => r-1)
  }
  return (
    <>
        <h1>counter : {counter}</h1>
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
    </>

  )
}

const reducer = (state, action) => { // 여기서 state 는 앞으로 컴포넌트에서 사용 할 수 있는 상태를 가르키게 되고, 
                                     // dispatch 는 액션을 발생시키는 함수라고 이해하면된다.
  switch(action.type){
    case 'DECREMENT':
        return {value: state.value -1}
    case 'INCREMENT' : 
        return {value: state.value +1}
    default :
        return state;
  }
}

const UseReducerBasic = () =>{
  const [state, dispatch] = useReducer(reducer, {value:0});   // reducer -> dispatch  , {} -> state


  return(
    <>
        <h1>counter : {state.value}</h1>
        <button onClick={()=> dispatch({type:'DECREMENT'})}>-1</button>
        <button onClick={()=> dispatch({type:'INCREMENT'})}>+1</button>
    </>
  )

}
export default UseReducerBasic;