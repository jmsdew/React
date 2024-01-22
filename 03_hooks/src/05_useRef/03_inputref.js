import { useEffect, useRef, useState } from "react";


const LoginComponent = () => {

  const [form, setForm] = useState({
    username : '',
    password : ''
  });

  const userNameRef = useRef();         // 렌더링 후 실행되기 때문에 document.getElementById 를 해도 찾지못함. ref를 통해 지정 가능

  useEffect(()=>{
    console.log(userNameRef.current);
    userNameRef.current.focus();  // 인풋 커서 위치 (포커스)
  },[])

  const onChangeHandler = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
}

  const onClickHandler = ()=>{
      alert(`username :  ${form.username} \n password : ${form.password}`);
      setForm({
        username:'',
        password:''
      });
      userNameRef.current.focus();
  }

  return (
    <>
        <input  
            type="text"
            name="username"
            placeholder="이름"
            onChange={onChangeHandler}
            value={form.username}
            ref={userNameRef}/>
        <br/>
        <input type="password"
               name="password"
               placeholder="비밀번호"
               onChange={onChangeHandler}    
               value={form.password}/>
        <br/>
        <button onClick={onClickHandler}>로그인</button>       
    </>
  );
}

export default LoginComponent;