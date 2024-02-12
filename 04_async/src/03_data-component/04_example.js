import { useState } from "react"


const Example = () => {
  const [name, setName] = useState('');
  const [genders, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [con,setCon] = useState('');
  const [result1, setResult1] = useState('');
  const [background, setBackground] = useState('');
  const [img1, setImg] = useState('');



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
      setCon(data.attachments[1].text);
    })

  }

  const ClickQuote = () => {
    fetch(`https://opentdb.com/api.php?amount=10`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })

  }

 

  const NYTimes = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=b2f485cd2f274a5ba62325da31653420`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResult1(data.articles[16].title);
      setBackground(data.articles[16].description);
      setImg(data.articles[16].urlToImage);
      
    

    })

  }





  return (
    <>
      
      <button onClick={NYTimes}>뉴욕타임즈</button>
      <h2>{genders}</h2>
      <h2>{age}</h2>
      <h1>{con}</h1>
      <h1>{result1}</h1>
      <img src={img1}/>
      <h1>{background}</h1>
      
    </>
  )

}

export default Example;