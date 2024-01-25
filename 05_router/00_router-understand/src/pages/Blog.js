import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getTextList } from "../api/TextApi";
import AllText from "../component/AllText";
import boxStyle from "./Text.module.css"

const Blog = () => {

  const [textList, setTextList] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(
    ()=>{
      setTextList(getTextList());
    }
  )

  const onClickHandler =() => {
    navigate(`/blog/search?textName=${search}`);
  }


  return(
    <>
    <h1>선수단 정보</h1>
    <div className={boxStyle.textBox}>
      {textList.map(blog => <AllText key={blog.textCode} blog={blog}/>)}
    </div>
    <div>

        <label>선수 검색 : </label>
        <input type="search" name="textName" onChange={e => {setSearch(e.target.value)}}/>
        <button onClick={onClickHandler}>검색</button> <br/><br/>

    </div>
  </>
  )
}

export default Blog;