import {useState} from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import UseEffectCleanUp from "./01_useEffect/04_useEffect-cleanup";
import { Container } from "./01_useEffect/05_useEffect-cleanup-example";
import { Question } from "./01_useEffect/00_quiz";
import UseReducerBasic, { Counter } from "./02_useReducer/01_reducer-basic";
import ReducerFormControl, { Input } from "./02_useReducer/02_reducer-form-control";
import Start from "./01_useEffect/06_study";


function App() {
  const [message, setMessage] = useState("안녕하세요");

  return (
    <>
{/*     <UseEffectBasic message={message}/> */}
{/*     <UseEffectMount/> */}
{/*         <UseEffectUpdate/> */}
{/*         <UseEffectCleanUp/> */}
{/*       <Container/> */}
{/*         <Question/> */}
{/*         <Counter/> */}
{/*         <UseReducerBasic/> */}
{/*         <ReducerFormControl/>
        <Input/> */}
        <Start/>
    </>
  );
}

export default App;


//  렌더링이 2번씩 실행되는 이유는 개발 모드일 시 React.StrictMode 때문이다.
// CRA로 생성된 리액트 프로젝트는 자동으로 설정되어 있기 때문에 발생하게 되는 것.
// 리액트 공식 문서에도 명시되어 있다.
// index 에서  React.StrictMode 삭제시 발생하지 않지만 어차피 실제 배포시에는 1번만 실행된다