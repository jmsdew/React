# hooks


## useEffect 
<p>
  didMount && didUpdate 와 동일한 라이프 사이클을 갖는 훅스이다. <br/>
  해당 컴포넌튼는 렌더링 이후 시점에 호출되며 보통 리소스를 할당하거나 <br/>
  외부 api를 호출할 때 많이 사용한다.
</p>

## useReducer
<p>
  userReducer 란 state를 컴포넌트 외부에서 공통 작업을 수행하기 위한 hook 이다. <br/>
  첫 번째 매개변수로 state와 action을 받는다.

  [표현식]
  // 외부에 컴포넌트의 상태를 관리하는 함수를 선언
  function reducer = (state,action){
     switch(action.type){
     case 'DECREMENT':
        return {value: state.value -1}
    case 'INCREMENT' : 
        return {value: state.value +1}
    default :
        return state;
    }
  }

  [사용]
  const MyComponent = () => {
    const [state,dispatch] = useReducer(reducer,{initState})
  }

  리듀서는 할당된 state의 value를 component의 state에 넣어주고
  dispatch에 전달받느 외부 함수에 선언된 state를 reducer의 첫 번째
  매개변수로 전달하여 action의 상태에 따라 동작을 하는 기능을 제공한다. 
</p>


## useMemo

<!-- useMemo에서 memo는 memoization을 뜻하는데 이는 그대로 해석하면 ‘메모리에 넣기’라는 의미이며 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술이다. -->
<p>
  필요한 이유 - 함수형 컴포넌트의 특성상 state 가 변경되면 update가 되면서 <br/>
  오랜 연산이 수행되어야 하는 경우 계속 반복적으로 연산을 처리하게 된다. 이로 인해 어플리케이션의 렌더링이 늦어지는 현상을 막고자 <br/>
  감지의 대상을 정해 해당 대상이 변경되지 않을 경우 mount 시점에 연산을 했던 값을 <br/>
  저장하여 다음 렌더링 시에 재활용 하게 된다. 이를 통해 렌더링 속도를 <br/>
  효율적으로 관리할 수 있게 된다.

  [표현식]
  // 상태의 변화에 따라 수행 내용이 달라지는 경우 의존성 배열에 상태를 추가한다.
  // 만약 최초 마운트 시점에만 필요한 경우 의존성 배열에 상태를 추가하지 않는다.
    const location = useMemo(()=>{
    return{
        수행내용
    }
  },[상태]);
</p>

## useCallBack
<p>
    useCallback 은 의존성 배열에 값이 변하지 않는 경우 마운트 시점의 함수 내부 상태를 스냅샷 하여 <br/>
    함수를 memorization을 통해 해당 시점에 재사용할 때 사용한다. <br/>

[표현식]
// 의존성 배열의 상태 변화 시점의 상태를 스냅샷 찍어 재활용한다.
const test = () => {
  const [state,setState] = useState(3);
  const sFun = useCallback(()=>{
    // state가 4로 변경 되어도 해당 sFun의 결과는 아래와 같다.
    // 현재의 state : 3
    console.log("현재의 state : " +state);
  },[])  // 마운트 시점의 결과를 스냅샷 찍는다.

}
</p>


## useRef
<p>
  dom을 지정할 때 사용한다. <br/>

  dom요소는 코드를 해석하고 난 이후에 렌더링이 이루어지게 되며 이 시점은 해당 코드가 <br/>
  이미 컴파일 된 시점으로 해당 엘리먼트를 지시할 수 없는 상태가 되는데 이를 엘리먼트의 ref 속성에 <br/>
  useRef hooks를 이용하여 dom을 조작할 수 있다.

  [표현식]
  const RefComponent = () => {
    const userNameRef = useRef();
  return (
    <>
        <input  
            type="text"
            name="username"
            placeholder="이름"
            onChange={onChangeHandler}
            value={form.username}
            ref={userNameRef}/>
    </>
   )
  }
</p>


## usecontext
<p>
    context 는 react 컴포넌트 트리 안에서 전역적으로 데이터를 공유할 수 있도록 고안된 방법이다. <br/>
    트리 구조가 복잡해질 수록 하위 컴포넌트로 props를 전달하기 위해 drilling이 발생할 수 있게 되고, <br/>
    그러면 유지보수가 매우 힘들어지고 코드를 읽기도 힘들어지게 된다. <br/>
    하지만 context를 사용하면 중간 컴포넌트들에게 props를 넘겨주지 않아도 되고, 유지보수도 훨씬 수월해지게 된다. <br/>
    단 context를 사용하면 컴포넌트를 재사용하기 어려워지기 때문에 꼭 필요할 때만 써야한다. <br/>
    따라서 때에 따라서는 context보다 props drilling이 더 간단한 해결책이 될 수 있다. <br/>
    usecontext는 자식 컴포넌트들이 props를 내려 받을 때 컴포넌트 트리가 복잡해질수록  <br/>
    상태를 관리하기 어려워지기 때문에 context객체로 연관된 컴포넌트들을 묶어 자식 컴포넌트들이 <br/>
    해당 컨텍스트를 구독하여 props를 할당 받지 않고도 값을 참조할 수 있도록 하는 hooks 이다. <br/>
    이를 통해 어플리케이션의 유지보수성을 증가시킬 수 있다. 그러나 리액트는 컴포넌트를 재사용할 수 있는 장점을 가지고 있는데 컨텍스트를 잘못 사용하면 이러한 장점을 잃어버릴 수 있다.
</p>

