import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchText } from "../api/TextApi";
import boxStyle from './Text.module.css'
import AllText from "../component/AllText";

const FindText = () => {

  const [search] = useSearchParams();

  const textNames = search.get("textName");
  const [textList,setTextList] = useState([]);

  useEffect(()=>{
    setTextList(searchText(textNames));
  },[])

  return (
    <>
      <div className={boxStyle.Textbox}>
        {textList.map(blog => <AllText key={blog.textCode} blog={blog}/>)}
      </div>
    
    
    </>
  )
}


export default FindText;