import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Menus from "./page/Menus";
import MenuDetail from "./page/MenuDetail";
import Main from "./page/Main";
import MenuRegist from "./page/MenuRegist";
import MenuModify from "./page/MenuModify";
import Error from "./page/Error";
import Login from "./page/Login";
import '../src/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="menu">
            <Route index element={<Menus/>}/>
            <Route path=":id" element={<MenuDetail/>}/>
            <Route path="regist" element={<MenuRegist/>}/>
            <Route path="modify">
              <Route path=":id" element={<MenuModify/>}/>
            </Route>
          </Route>
          <Route path="login" element={<Login/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
