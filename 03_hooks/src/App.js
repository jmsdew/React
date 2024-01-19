import {useState} from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import UseEffectCleanUp from "./01_useEffect/04_useEffect-cleanup";
import { Container } from "./01_useEffect/05_useEffect-cleanup-example";
import { Question } from "./01_useEffect/00_quiz";
import UseReducerBasic, { Counter } from "./02_useReducer/01_reducer-basic";
import ReducerFormControl, { Input } from "./02_useReducer/02_reducer-form-control";


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
        <ReducerFormControl/>
        <Input/>
    </>
  );
}

export default App;
