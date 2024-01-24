import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { About } from "./pages/About";
import Menu from "./pages/Menu";


function App() {

  /* 
      npm install react-router-dom

      라우팅 : 
      어떤 요청을 어디로 안내 및 매핑을 할 것인지를 정해놓고 진행하는 것으로 
      리액트에서는 요청에 따라 요청에 매핑 된 컴포넌트를 렌더링 한다.

      BrowserRouter : 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
      Routes : Route 를 묶어주는 단위 (컴포넌트)
      Route : url 요청 주소와 컴포넌트를 매핑해 주는 단위 (컴포넌트)
  
  */
  return (
      <>
        <BrowserRouter>
          <Routes>
            {/* index / 기본 루트 요청시 응답할 라우터이다. */}
            <Route path="/" element={<Main/>}/>   
            {/* path 는 해당 리소스에 대해 응답할 엘리먼트이다. */}
            <Route path="/about" element={<About/>}/>
            <Route path="/menu" element={<Menu/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
