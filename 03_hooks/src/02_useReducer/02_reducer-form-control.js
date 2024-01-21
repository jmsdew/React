import { useReducer } from "react"


const reducer = (state,action)=>{             // 같은 기능을 하는 함수를 한번에 설정해 어디서나 사용할 수 있음.
  console.log(action);
  return {
    ...state,
    [action.name] : action.value
  }
}

const reducer2 = (state,action)=>{
  return{
    ...state,
    [action.name] : action.value
  }
}

export const Input = () =>{
  const [state, dispatch] = useReducer(reducer,{
    pass:'',
    passcheck:''
  });

  const onChangeHandler = e => dispatch(e.target);

  return (
    <>
        <input type="password" name="pass" onChange={onChangeHandler}/>
        <input type="password" name="passcheck" onChange={onChangeHandler}/>
        <div>
          <h3>비번 : {state.pass} </h3>
          <h3>확인 : {state.passcheck}</h3>
        </div>
    </>
  )
}




const ReducerFormControl = () =>{

    const [state, dispatch] = useReducer(reducer,{
      name:'',
      nickname:''
    });

    const {name, nickname} = state;  // state 에서 꺼내와 name nickname 담음
    const onChangeHandler = e => dispatch(e.target);

    return (
      <>
          <label>이름 : </label>
          <input type="text" name="name" onChange={onChangeHandler}/>
          <br/>
          <label>닉네임 : </label>
          <input type="text" name="nickname" onChange={onChangeHandler}/>
          <div>
            <h3>입력한 이름 : {name} </h3>
            <h3>입력한 닉네임 : {nickname}</h3>
          </div>
      </>
    )

}

export default ReducerFormControl;