import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTextDetail } from "../api/TextApi";


const DetailText = () => {

  const {textCode} = useParams();

  const [blog,setBlog] = useState({
    textCode:0,
    textName : '',
    categoryName : '',
    texts : ''
  });

  useEffect(()=>{
    setBlog(getTextDetail(textCode));   //useParam을 통해 가져온 텍스트 코드를 Api를 이용해 내용을 찾아 set으로 담음
    console.log(getTextDetail(textCode));
  },[]);  // mount 단계에서만 실행. (처음만)


  return (
    <>  
      <h2>등번호 : {blog.textCode}</h2>
      <h2>게시글 제목 : {blog.textName}</h2>
      <h3>포지션 : {blog.categoryName}</h3>
      <h3>설명 : {blog.texts}</h3>
    </>
  )

}



export default DetailText;