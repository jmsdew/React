import React from 'react';
import Container from './Container';
import InputContainer from './InputContainer';
const {useState} = React;

//---------------------------------------------------------------------------------------------------------
// 애플리케이션의 전체 화면
function App() {
  const [todoList,setTodoList] = useState(["안녕", "안녕2"]);   // 뿌려줄 list 를 useState에 담아서 보냄
  const [isOn, setIsOn] = useState(true);
  const [color,setColor] = useState("black");
  const [ input, setInput] = useState("");

  const style = {
    width:500,
    height:500,
    backgroundColor:isOn? "white":"black",
    color:isOn? "black":"white",
    position:'relative',
    left:550, top:200
  }
 const darkMode = ()=>{
   setIsOn(!isOn);
 }

 const colorChange = (e) =>{
  const a = e.target.value
  console.log("color :" + a);
    setColor(a);
 }
 const changeInput = (e) => {
  setInput(e.target.value);
  }

  return (
    <>
      <div style={style}>
        <h1>todolist</h1>
        <button onClick={darkMode}>다크모드</button>
        <Container todoList={todoList} setTodoList={setTodoList} color={color}/>
        <InputContainer setTodo={setTodoList} todoList={todoList}/>
        <input type='text' value={input} onChange={changeInput}/>
        <button onClick={colorChange} value={input}>색변경</button>
      </div>
    </>
  );
}


//  다크모드, 색변경







export default App;
