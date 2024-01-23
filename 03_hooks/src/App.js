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
import HardCalculator from "./03_useMemo/01_hard-calculator";
import ComplexCalculator from "./03_useMemo/02_complex-calculator";
import UseMemoComponent from "./03_useMemo/03_performance-optimization";
import LocationComponent from "./03_useMemo/04_object-type-problem";
import CallBackProblem from "./04_useCallBack/01_problem";
import FunctionMemorization from "./04_useCallBack/02_function_memorization";
import CallBackComponent from "./04_useCallBack/03_composited-component";
import CounterRef from "./05_useRef/01_problem";
import UseRefCounter from "./05_useRef/02_resolve-as-useRef";
import LoginComponent from "./05_useRef/03_inputref";
import Header from "./06_useContext/01-props-drilling";
import Page from "./06_useContext/01-props-drilling";
import ContextContainer from "./06_useContext/02_useContext";
import CustomHooks from "./07_custom-hooks/02_custom-hook";


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
{/*         <Start/> */}
{/*           <HardCalculator/> */}
{/*           <ComplexCalculator/> */}
{/*         <UseMemoComponent/> */}
{/*           <LocationComponent/> */}
{/*           <CallBackProblem/> */}
{/*             <FunctionMemorization/> */}
{/*           <CallBackComponent/> */}
{/*           <CounterRef/> */}
       {/*      <UseRefCounter/> */}
      {/*  <LoginComponent/> */}
     {/*      <Page/> */}
     {/* <ContextContainer/> */}
     <CustomHooks/>
    </>
  );
}

export default App;


//  렌더링이 2번씩 실행되는 이유는 개발 모드일 시 React.StrictMode 때문이다.
// CRA로 생성된 리액트 프로젝트는 자동으로 설정되어 있기 때문에 발생하게 되는 것.
// 리액트 공식 문서에도 명시되어 있다.
// index 에서  React.StrictMode 삭제시 발생하지 않지만 어차피 실제 배포시에는 1번만 실행된다