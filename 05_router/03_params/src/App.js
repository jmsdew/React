import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import About from "./pages/About";
import MenuDetails from "./pages/MenuDetails";
import MenuSearchResult from "./pages/MenuSearchResult";

function App() {

  // npm i react-router-dom

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="main" element={<Main/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="menu">
            <Route index element={<Menu/>}/>
            <Route path=":menuCode" element={<MenuDetails/>}/>   {/* : 은 pathvariable을 의미        pathVariable http:localhost/menu/30 */}
            <Route path="search" element={<MenuSearchResult/>}/>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
