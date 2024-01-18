import React from 'react';
const {useState} = React;

//---------------------------------------------------------------------------------------------------------
// 새롭게 todoList를 등록할 수 있는 인풋 컴포넌트
const InputContainer = ({todoList,setTodo}) =>{
  const[input, setInput] = useState("");
  const addList = () =>{
    setTodo([...todoList, input]);
    alert('등록완료');
    setInput("");
  }
  
  const changeInput = (e) => {
    setInput(e.target.value);
  }


  
  return(
    <>
    <input type='text' value={input} onChange={changeInput}/>
    <button onClick={addList}>추가</button>
    </>
  )
}

export default InputContainer;
