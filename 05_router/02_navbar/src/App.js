import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./page/Main";
import Mypage from "./page/Mypage";
import Login from "./page/Login";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="mypage" element={<Mypage/>}/>
            <Route path="login" element={<Login/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
