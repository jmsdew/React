import React from 'react';

const {useState} = React;

// list 를 출력하기 위한 컴포넌트
const Item = ({todo,setTodoList,todoList}) => {
  // check 되었을 경우 취소선 처리
  const [check, setCheck] = useState(false);
  const style ={
    textDecoration : check ? 'line-through' : "none"
  }

  const changeBox = ()=>{
    setCheck(!check);
  } 

  const removeTodo = () => {
   const result = todoList.filter(item => item !== todo);
   setTodoList(result);
    
  }

  return(
    <div>
        <input type='checkBox' onChange={changeBox}/>
        <label style={style}>{todo}</label>
        <button onClick={removeTodo}>삭제</button>
    </div>
  );
}
//---------------------------------------------------------------------------------------------------------

// todolist 를 화면에 출력하기 위한 컨테이너
const Container = ({todoList,setTodoList}) => {
  return(
      todoList.map((current,index)=>{        // 리턴지시문 넣어야함
        return <Item todo={current} key={index} setTodoList={setTodoList} todoList={todoList}/>
      })
  );
}
//---------------------------------------------------------------------------------------------------------

const InputContainer = ({todoList,setTodo}) =>{
  const[input, setInput] = useState("");
  const addList = () =>{
    setTodo([...todoList, input])
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



//---------------------------------------------------------------------------------------------------------
// 애플리케이션의 전체 화면
function App() {
  const [todoList,setTodoList] = useState(["안녕", "안녕2"]);
  return (
    <>
      <div>
        <h1>todolist</h1>
        <Container todoList={todoList} setTodoList={setTodoList}/>
        <InputContainer setTodo={setTodoList} todoList={todoList}/>
      </div>
    </>
  );
}









export default App;
