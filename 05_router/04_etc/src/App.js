import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Main from "./page/Main";
import Mypage from "./page/Mypage";
import Login from "./page/Login";
import Error from "./page/Error";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts/>}>
              <Route index element={<Main/>}/>
              <Route path="main" element={<Main/>}/>
              <Route path="mypage" element={<Mypage/>}/>
              <Route path="login" element={<Login/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>    {/* 존재하지 않는 요청 처리 */}
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
