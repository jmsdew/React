import React from 'react';
const {useState} = React;

//---------------------------------------------------------------------------------------------------------------
// list 를 출력하기 위한 컴포넌트

const Item = ({todo,setTodoList,todoList,color}) => {
  // check 되었을 경우 취소선 처리
  const [check, setCheck] = useState(false);
  const style ={
    textDecoration : check ? 'line-through' : "none",
    color:color
  }

  const changeBox = (e)=>{
    setCheck(!check);
  } 

  const removeTodo = () => {
    setCheck(!check);
   const result = todoList.filter(item => item !== todo);
   setTodoList(result);

  }

  return(
    <div>
        <input type='checkBox' onChange={changeBox} checked={check}/>
        <label style={style}>{todo}</label>
        <button onClick={removeTodo}>삭제</button>
    </div>
  );
}
//---------------------------------------------------------------------------------------------------------

// todolist 를 화면에 출력하기 위한 컨테이너
const Container = ({todoList,setTodoList,color}) => {
  return(
      todoList.map((current,index)=>{        // 리턴지시문 넣어야함
        return <Item todo={current} key={index} setTodoList={setTodoList} todoList={todoList} color={color}/>
      })
  );
}

export default Container;