import React from 'react';

const {useState} = React;
function App() {
  // 앞전 스크립트와 같이 setText로 뿌려줌
  // 뿌려줄때 앞에 버튼 뒤에 버튼 같이 뿌림
  // 앞 버튼은 클릭시 이벤트로 텍스트에 스타일 변화 - 줄긋기
  // 뒷 버튼은 클릭시 해당 id를 찾아 삭제하기

  
   const [names, setNames] = useState([]);


   const [text, setText] = useState("");
   const [nextId, setNextId] = useState(1);

    const onChangeHandler = e => setText(e.target.value);

    const onClickHandler = () =>{
      const changeNames = names.concat({
        id:nextId,
        name:text
      });
      setNextId(nextId+1);
      setNames(changeNames);
      setText("");
    }
      const onRemove = id =>{
        const changeNames = names.filter(name => name.id !== id);
        setNames(changeNames);
      }
      const onChecke = id =>{
       const change = document.getElementById(id);
       change.style.textDecoration= "line-through";
      }
      
    const nameList = names.map(name => {
      return (
        <>
          <button style={{position:'relative', left:-75, top:22}}  onClick={() => onChecke(name.id)}>체크</button>
          <li id={name.id} key={name.id} style={{width:200,position:'relative', left:30, border:1}}>{name.name}</li>
          <button style={{position:'relative', left:300, top:-20}} onClick={()=> onRemove(name.id)}>삭제</button>
        </>
      )
    })

  return (
    <>
      <div style={{backgroundColor:'aqua', width:500, height:500, position:'absolute', left:550, top:200}}>
      <h1>todolist</h1>
      <div  style={{position:'relative', height:250, width:400, left:45, backgroundColor:'white', overflow:'scroll'}} >
      <ul>
        <button style={{position:'relative', left:-32, top:22}}>체크</button>
        {nameList}
      </ul>
      </div>
      <input value={text} onChange={onChangeHandler} style={{position:'absolute', top:400,left:150}}/>
      <button onClick={onClickHandler} style={{position:'absolute', top:400,left:330}}>추가하기</button>
      </div>
    </>
  );
}

export default App;
