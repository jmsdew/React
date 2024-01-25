import { useState } from "react"


const Example = () => {
  const [name, setName] = useState('');
  const [genders, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [con,setCon] = useState('');

  const onChangeHanlder = (e) => {
      setName(e.target.value);
  }

  const ClickHandler = () => {
    fetch(`https://api.genderize.io?name=${name}&country_id=KR`)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      setGender(data.gender);

    })
  }

  const ClickAge = () => {
    fetch(`https://api.agify.io?name=${name}`)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      setAge(data.age);
    })
  }
  
  const ClickCountry = () => {
    fetch(`https://icanhazdadjoke.com/slack`)
    .then(response => response.json())
    .then(data => {
      setCon(data.attachments[0].text);
    })

  }

  const ClickQuote = () => {
    fetch(`https://opentdb.com/api.php?amount=10`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })

  }





  return (
    <>
      <label>이름 입력</label>
      <input type="text" onChange={onChangeHanlder}/>
      <button onClick={ClickHandler}>이 사람의 성별은? </button>
      <button onClick={ClickAge}>이 사람의 나이는?</button>
      <button onClick={ClickCountry}>농담 생성기</button>
      <button onClick={ClickQuote}>명언 생성기</button>
      <h2>{genders}</h2>
      <h2>{age}</h2>
      <h1>{con}</h1>
      
    </>
  )

}

export default Example;