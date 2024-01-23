import { useState } from "react"

// custom-hook는 쓸 일이 많지 않음

const useInput = () => {
  const [value,setValue] = useState("");

  const onChange = e => setValue(e.target.value);

  return {value, onChange};      // 반환타입이 객체
}

const CustomHooks = () => {

  const name = useInput();
  const pass = useInput();
  const email = useInput();
  return(
    <div>
    <label>이름 : </label>
    <input type="text" value={name.value} onChange={name.onChange}/>
    <br/>
    <label>비밀번호 : </label>
    <input type="password" {...pass}/>     {/* input의 속성과 객체의 key가 일치하면 축약표현이 가능하다. (스프레드 연산자) */}
     <br/>
    <label>이메일 : </label>
    <input type="email" {...email}/>
    <br/>
    <h4>name : {name.value}</h4>
    <h4>pass : {pass.value}</h4>
    <h4>email : {email.value}</h4>
</div>
  )
}

export default CustomHooks;